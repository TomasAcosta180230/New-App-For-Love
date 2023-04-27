import React ,{useState, createContext, useContext, useEffect }from 'react';
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated ,SafeAreaView,ActivityIndicator } from 'react-native';
import { firebaseConfig } from './Components/firebase';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
import Register from './screen/Register'
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
const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value= {{user, setUser}}>
      {children}
      </AuthenticatedUserContext.Provider>
  )
}
// Definir el componente del tab bar con estilos personalizados
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const [showTabBar, setShowTabBar] = useState(true);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({tabBarActiveTintColor: '#FBB825', tabBarInactiveTintColor:'#000000', tabBarShowLabel: false, style: { display: showTabBar ? 'flex' : 'none' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;
          let flex = 1;

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
          }else if (route.name === 'Tab5') {
            iconName = 'envelope';
            iconType = focused ? 'solid' : 'regular';
            flex = 0;
          }

          const iconColor = focused ? color : '#C4C4C4';
          const barColor = focused ? color : '#C4C4C4';
          const barHeight = focused ? 5 : 0;

          return (
            <View style={{ flex: flex, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name={iconName} size={size} color={iconColor} type={iconType} />
              <View style={{ position: 'absolute', top: -5, height: barHeight, width: '100%', backgroundColor: barColor }} />
            </View>
          );
        }
      })}
      
    >
      <Tab.Screen name="Tab2" component={Tab1Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab1" component={Tab2Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ headerShown: false }}/>
      <Tab.Screen name="Tab5" component={Tab5Screen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab4" component={Tab4Screen} options={{ headerShown: false  }}/>
      
    </Tab.Navigator>
  );
};
function ToMessage(){
  const navigation =useNavigation(); 
  navigation.navigate('Message');
}
function AppStack(){
  return(<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Home" component={TabNavigator} />
  <Stack.Screen name="Message" component={MessagePage} />
</Stack.Navigator>)
}

function AuthStack(){
  return(<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Register" component={Register} />
</Stack.Navigator>)
}
const App = () => {
  

  return (
    <AuthenticatedUserProvider>
             <RootNavigator/>
    </AuthenticatedUserProvider>
   
  );
};

function RootNavigator (){
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth,
      async AuthenticatedUser => {
        AuthenticatedUser ? setUser(AuthenticatedUser) : setUser(null);
        setLoading(false);
      });
      return () => unsuscribe();
  },[user]);
  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large"/>
      </View>
    )
  }
  return(
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
  </NavigationContainer>
  )
}
export default App;
