import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SearchResult = () => {
  return (
    <View style={styles.colorBar}>
      <View
        style={{
          justifyContent: 'flex-start',
        }}>
        <Image
          source={{uri: 'https://via.placeholder.com/100x100'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginEnd: 10,
          }}
        />
      </View>
      <View style={{flexShrink: 1}}>
        <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          nesciunt commodi saepe itaque ab odit?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#2D60E3',
    flexShrink: 1,
  },
  colorBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default SearchResult;
