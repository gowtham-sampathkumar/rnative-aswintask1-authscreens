import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButtom from '../src/reusableCompo/groupIconButton';
import InputField from '../src/reusableCompo/inputField';
import ButtonCompo from '../src/reusableCompo/buttonCompo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subText}>Welcome back you've {'\n'} been missed!</Text>
        </View>

        <View style={styles.fieldsContainer} >
          <InputField type="email" value={email} onChangeText={setEmail} placeholder="Enter your Email" />
          <InputField type="password" value={password} onChangeText={setPassword} placeholder="Enter your Password" />
          <Text style={styles.forgetPassStyle}>Forgot your password?</Text>
          <ButtonCompo title={'Sign in'} onPress={onPressSignIn} />
          <Text style={styles.createAccount}>Create new account</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTextStyle}>Or continue with</Text>
          <IconButtom style={styles.GroupedButtonstyle} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 25, },
  scrollContainer: { flexGrow: 1, justifyContent: 'center',
    // backgroundColor:'lightgreen'
   },

  textContainer: { alignItems: 'center', marginBottom:'10%',height:131,
    // backgroundColor:'red'
   },
  title: { fontSize: 30, color: '#1F41BB', marginBottom: 8,fontFamily: 'Poppins-Bold' },
  subText: { color: '#000000', textAlign: 'center', fontSize: 20,fontFamily:'Poppins-SemiBold'},

  fieldsContainer: { marginBottom: 30,width:357,height:369,fontFamily: 'Poppins-Medium',
    // backgroundColor:'pink'
   },
  forgetPassStyle: { color: '#1F41BB', textAlign: 'right', marginVertical: 10, fontSize: 14,fontFamily:'Poppins-SemiBold' },
  createAccount: { color: '#494949', textAlign: 'center', marginTop: 15, fontSize: 14,fontFamily:'Poppins-SemiBold' },

  bottomContainer: { alignItems: 'center', marginTop: 20,height:85,
    //  backgroundColor:'orange'
   },
  bottomTextStyle: { color: '#1F41BB', marginBottom: 10, fontSize: 14,fontFamily:'Poppins-SemiBold' },
  GroupedButtonstyle: { flexDirection: 'row', justifyContent: 'center' },
});


export default LoginPage;