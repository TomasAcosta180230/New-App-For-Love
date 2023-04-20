import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, StatusBar, TouchableOpacity, Image ,Animated, KeyboardAvoidingView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Backend de la app
const App = ({navigation}) => {
 
 //Todo el front de la app
  return (
    
        //
        <SafeAreaView>
          <StatusBar backgroundColor="#BC442A"/>
            <View style={styles.header}>
            </View>
        </SafeAreaView>
        // <View style={styles.headerContainer}>
           
        //     <Text style={styles.textHome}>Love & More</Text>
        //     <View style={[styles.containerImg, { width: 35, height: 35 }]}>
        //       <Image source={require('../assets/icons/lOGOaPP.png')} style={[styles.image, { width: 35, height: 35 }]}/>
        //     </View>
        // </View>
     
        
    
  );
};
//Estilos de botones, header, footer y container
const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#BC442A',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    flex:1,
    backgroundColor:'#7CA539'
  }
});

export default App;
