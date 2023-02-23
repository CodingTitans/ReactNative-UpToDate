import React from 'react';
import {View, StyleSheet} from 'react-native';
import SignIn from './SignIn';

const Profile: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SignIn navigation={navigation} />
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
});

export default Profile;
