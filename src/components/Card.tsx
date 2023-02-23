import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

const NewsCard = ({navigation}: {navigation: any}) => {
  return (
    <Pressable onPress={() => navigation.navigate('News')}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={{
            uri: 'https://media.npr.org/assets/img/2022/12/12/2012-037864-lg-041b10ab25936420ced3632b1ff6e8229fd5e851-s1600-c85.webp',
          }}
          resizeMode={'cover'}
          style={styles.image}
        />
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.title}>
              Fusion breakthrough could be an energy game-changer
            </Text>
          </View>
          <Text style={styles.body}>
            Scientists have reached a major milestone in the pursuit of nuclear
            fusion, the process that powers the stars and could one day provide
            a globally accessible, long-term supply of carbon-free energy.
          </Text>
          <Text>Last updated 3 mins ago</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  contentWrapper: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 12,
    marginBottom: 18,
  },
  image: {
    width: '100%',
    height: 220,
  },
});

export default NewsCard;
