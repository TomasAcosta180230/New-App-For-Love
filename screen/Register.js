import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert,Image } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import CircleButton from '../Components/CircleButton';

import { createUserWithEmailAndPassword, getAut, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { database, firebaseConfig } from '../Components/firebase';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
const back = require('../assets/background.jpg')


function RegisterScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
function saveLogin(userids, emails, passwords){
  const db = getDatabase();
  const friendCode = generateRandomCode();
  set(ref(db,'users/'+ userids),{
      email:email,
      password:password,
      friendCode:friendCode
  })
}
const generateRandomCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code.slice(0, 3) + '-' + code.slice(3);
};
  const handleCreateAccount = () => {
     createUserWithEmailAndPassword(auth,email,password)
     .then((credetiaUser) =>{
      console.log('sign in');
      const user = credetiaUser.user;
      const id = user.uid;
      saveLogin(id,email,password);
     }).catch(error => {
      Alert.alert(error.message);
    })
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('sign in');
        const user = userCredential.user;
        console.log(user);
        //navigation.navigate('Home');
        //Alert.alert('Bienvenido', 'Login Susscefuly');
      })
      .catch(error => {
        Alert.alert(error.message);
      })
  }
  return (
    <View style={styles.container}>
      <Image source={back} style={styles.backimage}/>
      
      <View style={styles.whitesheet}>
      <Text style={styles.titulo}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleCreateAccount} style={styles.boton}>
          <Text style={styles.botonTexto}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ top: 10, left:-25 }}>Forgot your password? </Text>
        <Text style={{ top: -9 , left:65, color:'#FBB825', fontWeight:'900' }}>Here</Text>
        {/* <TouchableOpacity onPress={handleCreateAccount} style={styles.botonR}>
          <Text style={styles.botonTexto}>Crear Cuenta</Text>
        </TouchableOpacity> */}
      </View>
      </View>
    </View>
  );
};
//Estilos de botones, header, footer y container
const styles = StyleSheet.create({
  backimage:{
    width:'100%',
    height: 340,
    position:'absolute',
    top: 0,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  whitesheet:{
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -20,
    color: '#FBB825',
    top:50,
    left:132,
    fontSize: 38
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    top:120,
    left:40
  },
  input: {
    fontSize: 16,
    height: 58,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding:12,
    backgroundColor: '#F6F7FB'
  },
  boton: {
    backgroundColor: '#FBB825',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  botonR: {
    backgroundColor: '#0310DF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  botonTexto: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 16,
  },
});


export default RegisterScreen;
