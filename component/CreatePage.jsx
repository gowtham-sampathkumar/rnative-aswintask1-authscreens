import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButtom from '../src/reusableCompo/groupIconButton';
import InputField from '../src/reusableCompo/inputField';
import ButtonCompo from '../src/reusableCompo/buttonCompo';

const CreatePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword,setNewPassword]=useState('');

  const onPressSignIn = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subText}>Create an account so you can explore all the {'\n'} existing jobs </Text>
        </View>

        <View style={styles.fieldsContainer} >
          <InputField type="email" value={email} onChangeText={setEmail} placeholder="Email" />
          <InputField type="password" value={password} onChangeText={setPassword} placeholder="Password" />
          <InputField type="password" value={newPassword} onChangeText={setNewPassword} placeholder='Confirm Password' />
          <ButtonCompo title={'Sign up'} onPress={onPressSignIn} />
          <Text style={styles.createAccount}>Already have an account</Text>
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

  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, },
  scrollContainer: { flexGrow: 1, justifyContent: 'center',
    // backgroundColor:'lightgreen'
   },

  textContainer: { alignItems: 'center', marginBottom:'10%',
    // backgroundColor:'red'
   },
  title: { fontSize: 30, color: '#1F41BB', marginBottom: 8,fontFamily: 'Poppins-Bold'  },
  subText: { color: '#000000', textAlign: 'center', fontSize: 14,fontFamily:'Poppins-Medium' },

  fieldsContainer: { marginBottom: 30,
    // backgroundColor:'pink'
   },
  forgetPassStyle: { color: '#1F41BB', textAlign: 'right', marginVertical: 10, fontSize: 14 },
  createAccount: { color: '#494949', textAlign: 'center', marginTop: 30, fontSize: 14 ,fontFamily: 'Poppins-SemiBold' },

  bottomContainer: { alignItems: 'center', marginTop: 20,
    //  backgroundColor:'pink'
   },
  bottomTextStyle: { color: '#1F41BB', marginBottom: 10, fontSize: 14 ,fontFamily: 'Poppins-SemiBold' },
  GroupedButtonstyle: { flexDirection: 'row', justifyContent: 'center' },
});


export default CreatePage;