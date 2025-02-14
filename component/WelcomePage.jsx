import React from 'react';
import {Image,SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import WelcomeImage from '../src/assets/image/Work_from_home.png';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.imageContainer}>
          <Image source={WelcomeImage} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Discover Your{'\n'}Dream Job here</Text>
          <Text style={styles.subtitle}>
            Explore all the existing job roles based on your{'\n'}
            interest and study major
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {flex: 1,backgroundColor: '#FFFFFF'},
  scrollContainer: {flex: 1,justifyContent: 'center',padding: 15 },

  imageContainer: {alignItems: 'center',marginBottom:"12%",width: 385,height: 422,
    // backgroundColor:'pink'
  },
  image: {width: 363,height: 370,resizeMode: 'contain'},

  textContainer: {alignItems: 'center',marginBottom:"15%",
    // backgroundColor:'red'
  },
  title: {fontSize: 35,color: '#1F41BB',textAlign: 'center',fontFamily:'Poppins-SemiBold'},
  subtitle: {fontSize: 14,color: '#000000',textAlign: 'center', marginTop: 10 ,fontFamily:'Poppins-Regular'},

  buttonContainer: {flexDirection: 'row',height:56,justifyContent: 'space-between',width: 350,paddingHorizontal: "10%"},
  loginButton: {backgroundColor: '#1F41BB',paddingVertical: 14,paddingHorizontal: 42,borderRadius: 10,width:140},
  loginText: {color: 'white',fontSize: 20,fontFamily:'Poppins-SemiBold'},
  registerText: {fontSize: 20,fontFamily:'Poppins-SemiBold',color: 'black',alignSelf: 'center',paddingVertical: 12}
});

export default Welcome;





