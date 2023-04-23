import React, { useState } from 'react';
import { View, Text,StyleSheet, StatusBar, TouchableOpacity, Image ,Animated ,SafeAreaView, TextInput, Button,Alert } from 'react-native';
import Header  from '../Components/header';
import Aliqa from '../assets/fonts/Aliqa.ttf'
import Texts from '../Components/text'
import {db,app} from '../Components/firebase'
import { getAut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../Components/firebase';
import { getDatabase, ref, onValue} from "firebase/database";
//Backend de la app


const FriendCode = () => {


const db = getDatabase();
const [id,setID] = useState('');

function readData() {
const auth = getAuth(app);
const currentUser = auth.currentUser;
const startCountRef = ref(db,'users/' + currentUser.uid);
onValue(startCountRef, (snapshot) => {
    const data = snapshot.val();
    setID(data.friendCode)
})

}
// db.ref(`users/${encodedEmail}`).once('value')
// .then((snapshot) => {
//   const user = snapshot.val();
//   if (user && user.email === mail) {
//     Alert.alert('Inicio de sesión exitoso');
    
//   } else {
//     console.log('Credenciales inválidas');
//   }
// })
// .catch((error) => {
//   console.log('Error de inicio de sesión:', error);
// });

//Todo el front de la app
  return (
        <SafeAreaView style={styles.container}>
          {/* Header principal */}
            <View>
            <Texts>Friend Code</Texts>
                <TextInput
                    placeholder="Ingresa tu código de amigo"
                    style={styles.input}
                    //value={friendCode}
                    //onChangeText={setFriendCode}
                />
                <TouchableOpacity style={styles.boton}>
                        <Text style={styles.BtnText}>Enter</Text>
                </TouchableOpacity><TouchableOpacity style={styles.boton} onPress={readData}>
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
    textFriendCode:{
        fontWeight:'900',
        fontSize:20
    },
    containerFriend:{
        backgroundColor:'white',
        width:300,
        height:100,
        borderRadius:20,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        top:180
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBB825'
      },title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        left:22
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        padding: 10,
        marginVertical: 10,
        width: '100%',
        fontSize: 16,
        backgroundColor:'white',
        left:20
      },texto: {
        fontSize: 16,
        color: '#333',
      },
      boton: {
        backgroundColor: '#45A73E',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 100,
        height:50,
        alignItems: 'center',
        left:70
      },BtnText:{
            color:'white',
            fontWeight:'900',
            top:5
      }
});


export default FriendCode;
