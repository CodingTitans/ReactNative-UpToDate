import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const Preference = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Choose your preferred Country</Text>

          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/PjnqYXR/f1.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/6FCfk1c/f2.png',
                }}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/bbgPG1D/f3.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/9H2zrRf/f4.png',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/16NctMR/f5.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/RDRPsQw/f6.png',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/9nV5gnk/f7.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/8mdM45V/f8.png',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/BgSfD3y/f9.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.box1}>
              <Image
                style={styles.box1}
                source={{
                  uri: 'https://i.ibb.co/bQy5BsP/f10.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  boxStyle: {
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  mainBox: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginTop: 5,
  },
  box1: {
    backgroundColor: '#f2f2f2',
    height: 150,
    width: 150,
    marginTop: 5,
  },
  defaultContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    padding: 20,
    margin: 20,
  },
  textStyle: {
    fontSize: 29,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

Preference.displayName = 'Preference';

export default Preference;
