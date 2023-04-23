import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  texto: {
    fontSize: 80,
    color: '#fff',
  },
});

const TextoConFuente = ({ fontFamily, children }) => {
  return (
    <Text style={[styles.texto, { fontFamily }]}>
      {children}
    </Text>
  );
};

const App = ({children}) => {
  const [fuenteCargada, setFuenteCargada] = React.useState(false);

  React.useEffect(() => {
    async function cargarFuente() {
      await Font.loadAsync({
        'Arial': require('../assets/fonts/Aliqa.ttf'),
      });
      setFuenteCargada(true);
    }

    cargarFuente();
  }, []);

  return (
    <View>
      {fuenteCargada && (
        <TextoConFuente fontFamily="Arial">{children}</TextoConFuente>
      )}
    </View>
  );
};

export default App;
