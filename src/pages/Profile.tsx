import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SignIn from './SignIn';
import {authChannel, logoutUser} from '../api';

// TODO: check on this component if the user is logged in then show user profile else navigate to sign in page

const Profile: React.FC<{navigation: any}> = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    return authChannel(onAuthStateChanged);
  });

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <SignIn navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sample}>This will be the user profile</Text>
      <TouchableOpacity style={styles.button} onPress={() => logoutUser()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
  sample: {
    fontSize: 24,
  },
});

export default Profile;
