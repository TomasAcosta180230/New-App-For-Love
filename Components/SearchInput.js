import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#E6E6E6'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    width: '110%',
  },
  icon: {
    paddingHorizontal: 15,
    color: '#E6E6E6',
    paddingRight: 0
  },
  input: {
    flex: 1,
    padding: 8,
    paddingRight: 10,
  },
});

export default SearchInput;