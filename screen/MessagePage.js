import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated ,SafeAreaView } from 'react-native';
import Header  from '../Components/header';
//Backend de la app
const MessagePage = ({navigation}) => {
 
//Todo el front de la app
  return (
        <SafeAreaView>
          {/* Header principal */}
              <Header/>
          {/* ----------------- */}
        </SafeAreaView>
  
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
