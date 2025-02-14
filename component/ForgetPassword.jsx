import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButtom from '../src/reusableCompo/groupIconButton';
import InputField from '../src/reusableCompo/inputField';
import ButtonCompo from '../src/reusableCompo/buttonCompo';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const onPressSignIn = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Forget Password ?</Text>
          <Text style={styles.subText}>Enter your email address to get the{'\n'} password reset link</Text>
        </View>

        <View style={styles.fieldsContainer} >
          <InputField type="email" value={email} onChangeText={setEmail} placeholder="Enter Your Email" />       
          <ButtonCompo title={'Password Reset'} onPress={onPressSignIn} />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTextStyle}>Create new account </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, },
  scrollContainer: { flexGrow: 1, justifyContent: 'center',
    // backgroundColor:'lightgreen'
   },

  textContainer: { alignItems: 'center', marginBottom:'5%',height:'20%',
    // backgroundColor:'red'
   },
  title: { fontSize: 24, color: '#1F41BB', marginBottom: 8,fontFamily: 'Poppins-Bold'},
  subText: { color: '#000000', textAlign: 'center', fontSize: 20,fontFamily:'Poppins-SemiBold' },

  fieldsContainer: { minHeight:'25%',
    // backgroundColor:'pink'
   },
  forgetPassStyle: { color: '#1F41BB', textAlign: 'right', marginVertical: 10, fontSize: 14 },
  createAccount: { color: '#000000', textAlign: 'center', marginTop: 15, fontSize: 16 },

  bottomContainer: { alignItems: 'center',
    //  backgroundColor:'purple'
   },
  bottomTextStyle: { color: '#1F41BB', marginBottom: 10, fontSize: 14,fontFamily:'Poppins-SemiBold' },
  GroupedButtonstyle: { flexDirection: 'row', justifyContent: 'center' },
});


export default ForgetPasswordPage;