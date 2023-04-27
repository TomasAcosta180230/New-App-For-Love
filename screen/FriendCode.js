import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Animated, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import Header from '../Components/header';
import Aliqa from '../assets/fonts/Aliqa.ttf'
import Texts from '../Components/text'
import { db, app } from '../Components/firebase'
import { getAut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../Components/firebase';
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import io from 'socket.io-client';
import { useNavigation } from '@react-navigation/native';
import { collection } from 'firebase/firestore';
//Backend de la app


const FriendCode = () => {

  function navi() {

  }

  const db = getDatabase();
  const [id, setID] = useState('');
  const [chat, SetChat] = useState('');
  const [friendCode, setFriendCode] = useState('');
  const navigation = useNavigation();

  function readData() {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    const startCountRef = ref(db, 'users/' + currentUser.uid);
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      setID(data.friendCode)
    })

  }
  const handleConnect = () => {
    const db = getDatabase();
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    const dbRef = ref(db, 'users/');


    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if (id == friendCode) {
          Alert.alert("Error", "No puedes ingresar tu mismo codigo de amigo!");
        }
        if (childData.friendCode == friendCode) {

          const amgiosref = collection('amigos')
          Alert.alert(fullName);
          //navigation.navigate('Message', { p: fullName });
        }

      });
    }, {
      onlyOnce: true
    });
    // const start = ref(db,'users/')
    // .;
    // onValue(start, (snapshot) => {
    //   const data = snapshot.val();
    //   if (data.FriendCode !== currentUser.uid) {
    //     const socket = io('https://us-central1-loveapp-82dfb.cloudfunctions.net/app');
    //     socket.emit('connect', {
    //       user1: currentUser.uid,
    //       user2: data.uid,
    //     });
    //     Alert.alert(data.uid);
    //   }
    // });
  };
  useEffect(() => {
    readData();
  }, []);
  //Todo el front de la app
  return (
    <SafeAreaView style={styles.container}>
      {/* Header principal */}
      <View>
        <Texts>Friend Code</Texts>
        <TextInput
          placeholder="Ingresa tu código de amigo"
          style={styles.input}
          value={friendCode}
          onChangeText={text => setFriendCode(text)}
        />
        <TouchableOpacity style={styles.boton} onPress={handleConnect}>
          <Text style={styles.BtnText}>Enter</Text>
        </TouchableOpacity><TouchableOpacity style={styles.boton}>
          <Text style={styles.BtnText}>Ver codigo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerFriend}>
        <Text style={styles.textFriendCode}>Your Friend Code:</Text>
        <Text style={styles.textFriendCode}>{id}</Text>
      </View>

      {/* ----------------- */}
    </SafeAreaView>

  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({
  textFriendCode: {
    fontWeight: '900',
    fontSize: 20
  },
  containerFriend: {
    backgroundColor: 'white',
    width: 300,
    height: 100,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 180
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBB825'
  }, title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    left: 22
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    fontSize: 16,
    backgroundColor: 'white',
    left: 20,
    textAlign: 'center'
  }, texto: {
    fontSize: 16,
    color: '#333',
  },
  boton: {
    backgroundColor: '#45A73E',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 100,
    height: 50,
    alignItems: 'center',
    left: 70
  }, BtnText: {
    color: 'white',
    fontWeight: '900',
    top: 5
  }
});


export default FriendCode;
