import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.png';
import logo3 from '../assets/logo/logo3.png';

const IconButton = () => {
    return (
        <View style={styles.buttonContainer}>
             <TouchableOpacity style={styles.loginButton}>
                <Image source={logo2} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
                <Image source={logo1} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
                <Image source={logo3} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {flexDirection: 'row',justifyContent: 'space-evenly',width: '100%',paddingHorizontal: '10%'},
    loginButton: {backgroundColor: '#ECECEC',width: 70,height: 45,borderRadius: 10,alignItems: 'center',justifyContent: 'center'},
    icon: {width: 25,height: 25,resizeMode: 'contain'},
});

export default IconButton;

