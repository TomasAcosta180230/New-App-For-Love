import React, {
  useState, useEffect, useLayoutEffect, useCallback
} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore'
import  {getAuth, singOut} from'firebase/auth';
import {auth, database} from '../Components/firebase';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { db, app } from '../Components/firebase'
import { onValue, ref } from 'firebase/database';
export default function MessagePage() {
  const [messages, setMessages] = useState([]);
  const {params} = useRoute();
  const [friendCode, setFriendCode] = useState('');
  const mesaje =params?.p ?? '';
  function readData() {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    const startCountRef = ref(db, 'users/' + currentUser.uid);
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      setFriendCode(data.friendCode)
    })

  }
  
  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats7', mesaje,'messages');
    const q = query(collectionRef,orderBy('createdAt', 'desc'));

    const unsuscribe = onSnapshot(q, snapshot => {
      console.log('snapshot');
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          friendCode: friendCode,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
    });
    return () => unsuscribe();
  }, []);
  
  const onSend = useCallback((messages = []) => {
    setMessages(previusMessages => GiftedChat.append(previusMessages, messages));

    const {_id, createdAt, text, user} = messages[0];
    addDoc(collection(database, 'chats7',mesaje,'messages'),{
      _id,
      createdAt,
      text,
      user
    });
  },[]);

  return (
    <GiftedChat 
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email,
            avatar: null,
          }}
          messagesContainerStyle={{
            backgroundColor: '#fff'
          }}
          
    />
  );
};
