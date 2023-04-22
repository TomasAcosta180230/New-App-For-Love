import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getAut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Components/firebase';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home'
import Icon from 'react-native-vector-icons/FontAwesome';
import Match from './screen/MatchPage';
import Notify from './screen/Notify';

// Definir iconos para el tab bar
const icons = {
  Home: 'home',
  Settings: 'cog',
  Profile: 'user',
};

// Opciones de estilos del tab bar
const tabBarOptions = {
  activeTintColor: '#FBB825',
  inactiveTintColor: '#000000',
  style: { height: 60 },
  showLabel: false,
};

// Definir pantallas para las pestañas
const Tab1Screen = () => <Home />;
const Tab2Screen = () => <Notify />;
const Tab3Screen = () => <Match />;

// Definir el componente del tab bar con estilos personalizados
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === 'Tab1') {
            iconName = 'home';
            iconType = focused ? 'solid' : 'outline';
          } else if (route.name === 'Tab2') {
            iconName = 'cog';
            iconType = focused ? 'solid' : 'outline';
          } else if (route.name === 'Tab3') {
            iconName = 'user';
            iconType = focused ? 'solid' : 'regular';
          }

          const iconColor = focused ? color : '#C4C4C4';
          const barColor = focused ? color : '#C4C4C4';
          const barHeight = focused ? 5 : 0;

          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name={iconName} size={size} color={iconColor} type={iconType} />
              <View style={{ position: 'absolute', top: -5, height: barHeight, width: '100%', backgroundColor: barColor }} />
            </View>
          );
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab2" component={Tab2Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
