import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputField from '../src/reusableCompo/inputField';
import ButtonCompo from '../src/reusableCompo/buttonCompo';


const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');

  const onPressSignIn = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subText}>Enter your new password twice below {'\n'} to reset a new password</Text>
        </View>

        <View style={styles.fieldsContainer} >
          <InputField type="password" value={password} onChangeText={setPassword} placeholder="Enter new Password" />
          <InputField type="password" value={newpassword} onChangeText={setNewPassword} placeholder="Re-enter new password" />
          <ButtonCompo title={'Reset Password'} onPress={onPressSignIn} />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTextStyle}> Create new account </Text>
        
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

  textContainer: { alignItems: 'center',height:150,
    // backgroundColor:'red'
   },
  title: { fontSize: 28, color: '#1F41BB', marginBottom: 8,fontFamily: 'Poppins-Bold' },
  subText: { color: '#000000', textAlign: 'center', fontSize: 16,fontFamily:'Poppins-SemiBold' },

  fieldsContainer: { height:280,
    // backgroundColor:'pink'
   },
  forgetPassStyle: { color: '#1F41BB', textAlign: 'right', marginVertical: 10, fontSize: 14 },
  createAccount: { color: '#000000', textAlign: 'center', marginTop: 15, fontSize: 16 },

  bottomContainer: { alignItems: 'center',height:180,
    //  backgroundColor:'purple'
   },
  bottomTextStyle: { color: '#494949', marginBottom: 10, fontSize: 16,fontFamily:'Poppins-SemiBold' },
});


export default ResetPasswordPage;