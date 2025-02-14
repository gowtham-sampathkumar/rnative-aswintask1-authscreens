import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ type, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password'}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginBottom: 20 },
  input: {backgroundColor: '#F7F8F9',borderRadius: 8, padding: 15 ,height: 64,placeholderTextColor:"#C7C7CD"}
});

export default InputField; 