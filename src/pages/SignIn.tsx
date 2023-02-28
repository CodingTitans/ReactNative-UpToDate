import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {validateUser} from '../api';

const SignIn = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign in today and</Text>
        <Text style={styles.title}>Discover What's New!</Text>

        <TextInput
          placeholder="Your email address"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => validateUser(username, password)}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Sign Up')}
            style={styles.signupLink}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 80, // space for bottom navigation bar
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginVertical: 20,
    fontSize: 19,
  },
  button: {
    backgroundColor: '#007AFF',
    width: 150,
    height: 54,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },
  signupText: {
    fontSize: 15,
    textAlign: 'center',
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default SignIn;
