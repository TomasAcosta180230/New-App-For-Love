import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated ,SafeAreaView } from 'react-native';
import Header  from '../Components/header';
import { GiftedChat } from 'react-native-gifted-chat';
//Backend de la app
const MessagePage = ({navigation}) => {
 
//Todo el front de la app
  return (
        <GiftedChat/>
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
});


export default MessagePage;
