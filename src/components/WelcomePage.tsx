import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={styles.iconStyle}
          source={require('./../../assets/splash.png')}
        />
      </View>
      <View style={styles.mt}>
        <Text style={styles.textStyle}> UptoDate </Text>
        <Text style={styles.textStyle}> News App </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  iconStyle: {
    width: 250,
    height: 250,
  },
  mt: {
    marginTop: 32,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
