import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Image, Animated, KeyboardAvoidingView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Backend de la app
const App = ({ navigation }) => {

  //Todo el front de la app
  return (

    // Aqui se realiza el degradado del header
    // <LinearGradient
    //   colors={['#FE5B38', '#BC2A2A']
    //   }
    //   start={{ x: 1, y: 0 }}
    //   end={{ x: 0, y: 0 }}
    // >
      
      <SafeAreaView>
        <StatusBar backgroundColor={"#FBB825"}/>
        {/* Aqui se agregan todos los componentes que se quiere tener en el header */}
        <View style={styles.header}>
          <Text style={styles.labelText}>SunnyDate</Text>
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
    backgroundColor: '#fff',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor:'#E3E3E3',
    borderBottomWidth:1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#7CA539'
  },
  labelText:{
    fontSize:20,
    fontWeight:'bold',
    top:9,
    color:'#FBB825',
    
  }
});

export default App;
