import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import CircleButton from '../Components/CircleButton';

import { createUserWithEmailAndPassword, getAut, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Components/firebase';
import { useNavigation } from '@react-navigation/native';



function LoginScreen() {
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
      <Text style={styles.titulo}>Inicio de Sesión</Text>
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

        <TouchableOpacity onPress={handleSignIn} style={styles.boton}>
          <Text style={styles.botonTexto}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={{ top: 10 }}>OR</Text>
        <TouchableOpacity onPress={handleCreateAccount} style={styles.botonR}>
          <Text style={styles.botonTexto}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#195914'
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#45A73E',
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default LoginScreen;
