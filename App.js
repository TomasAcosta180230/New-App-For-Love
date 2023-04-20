import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert, Button,Image } from 'react-native';
import {getAut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Components/firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScreen from './screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home'
import Icon from 'react-native-vector-icons/FontAwesome';
import Match from './screen/MatchPage';
import Notify from './screen/Notify'
//Backend de la app Y Front de la app

const HomeScreen = ({ navigation }) => {
  return (
    
      <LoginScreen/>
  );
};
const Tab1Screen = () => {
  return (
  
    <Home/>
  
  );
};
const Tab2Screen = () => {
  return (<Notify/>);
};
const Tab3Screen = () => {
  return(<Match/>)
};
// Importa tus imágenes de iconos
const homeIcon = require('./assets/icons/home.png');
const homeIconFocused = require('./assets/icons/home-outline.png');
const Search = require('./assets/icons/search.png');
const SearchFocused = require('./assets/icons/search-outline.png');
const heart = require('./assets/icons/heart.png');
const heartFocused = require('./assets/icons/heart-outline.png');

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Tab1') {
           // Puedes cambiar el tamaño de los iconos aquí
            return<Image
            source={focused ? homeIcon : homeIconFocused}
            style={{ width: 30, height: 30 }}
          />;
        } else if (route.name === 'Tab2') {
           // Puedes cambiar el tamaño de los iconos aquí
            return<Image
            source={focused ? SearchFocused : Search}
            style={{ width: size, height: size }}
          />;
        } else if (route.name === 'Tab3')
        {
          return<Image
          source={focused ? heart : heartFocused}
          style={{ width: size, height: size }}
        />;
        }

       
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:{
        backgroundColor:'#BC442A', height: 40
      },
      tabBarLabel: () => null,
      tabBarLabelStyle: {
        fontSize: 14, // Cambia el tamaño del texto aquí
      },
    })}>
      <Tab.Screen name="Tab1" component={Tab1Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab2" component={Tab2Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={TabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
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


export default App;
