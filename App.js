import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home'
import Icon from 'react-native-vector-icons/FontAwesome';
import Match from './screen/MatchPage';
import Notify from './screen/Notify';
import MessagePage from './screen/MessagePage'
import FriendCode from './screen/FriendCode'

// Definir iconos para el tab bar
const icons = {
  Home: 'home-alt',
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
const Tab4Screen = () => <MessagePage />;
const Tab5Screen = () => <FriendCode/>

// Definir el componente del tab bar con estilos personalizados
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({tabBarActiveTintColor: '#FBB825', tabBarInactiveTintColor:'#000000', tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === 'Tab1') {
            iconName = 'search';
            iconType = focused ? 'solid' : 'outline';
          } else if (route.name === 'Tab2') {
            iconName = 'home';
            iconType = focused ? 'solid' : 'outline';
          } else if (route.name === 'Tab3') {
            iconName = 'heart';
            iconType = focused ? 'solid' : 'regular';
          }else if (route.name === 'Tab4') {
            iconName = 'bars';
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
        }
      })}
      
    >
      <Tab.Screen name="Tab1" component={Tab2Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab2" component={Tab1Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab4" component={Tab4Screen} options={{ headerShown: false }}/>
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
        <Stack.Screen name="FriendCode" component={Tab5Screen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
