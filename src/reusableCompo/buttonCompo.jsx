import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonCompo = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {backgroundColor: '#1F41BB',padding: 15,borderRadius: 8,alignItems: 'center',marginVertical: 10,height:60 },
  buttonText: {color: '#FFFFFF',fontSize: 20,fontFamily:'Poppins-SemiBold'},
});

export default ButtonCompo;

