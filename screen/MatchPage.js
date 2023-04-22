import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated ,SafeAreaView } from 'react-native';
import Header  from '../Components/header';

//Backend de la app
const Match = ({navigation}) => {
 
//Todo el front de la app
  return (
        <SafeAreaView style={styles.container}>
          {/* Header principal */}
              <Header/>
          {/* ----------------- */}

          {/* El front de la app */}
            <View>
                    <Text style={styles.labeltext}>Hola</Text><Text style={styles.labeltextB}>lover</Text>
            </View>
        </SafeAreaView>
  
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#fff'
      },
      labeltext:{
        fontSize:22,
        position:'absolute',
        left:20,
        top:10
      },
      labeltextB:{
        fontSize:22,
        fontWeight:'bold',
        position:'absolute',
        left:70,
        top:10
      }
});


export default Match;
