import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignUp = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textStyle}>Create an Account</Text>

      <TextInput placeholder={'First Name'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Last Name'} style={styles.inputBox}></TextInput>
      <TextInput
        placeholder={'Email Address'}
        style={styles.inputBox}></TextInput>
      <TextInput
        placeholder={'Phone Number'}
        style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Password'} style={styles.inputBox}></TextInput>
      <TextInput
        placeholder={'Date of Birth'}
        style={styles.inputBox}></TextInput>

      <BouncyCheckbox
        onPress={(isChecked: boolean) => isChecked}
        fillColor="blue"
        unfillColor="#fff"
        text="I accept the Terms & Conditions"
        style={{
          marginTop: 22,
        }}
      />

      <TouchableOpacity
        style={{
          width: '30%',
          padding: 15,
          backgroundColor: 'blue',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 40,
          marginBottom: 30,
        }}
      />

      <Text style={styles.accountConfimation}>
        Already Have An Account?
        <Text onPress={() => navigation.navigate('SignIn')}> Sign in</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 15,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
  inputBox: {
    width: '100%',
    height: 50,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderStroke: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  signup: {
    backgroundColor: 'purple',
    height: 60,
    width: 200,
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  accountConfimation: {
    fontSize: 14,
    textAlign: 'center',
  },
  skipSignup: {
    backgroundColor: 'blue',
    height: 40,
    width: 150,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 30,
    borderRadius: 30,
  },
});

SignUp.displayName = 'SignUp';

export default SignUp;
