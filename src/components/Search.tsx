import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchResult from './SearchResult';

const Search = () => {
  const tempArr = [1, 2, 3, 4, 5];

  return (
    <View style={styles.wrapper}>
      <Text
        style={{
          fontSize: 24,
          marginStart: 10,
          marginBottom: 20,
        }}>
        Search Results
      </Text>

      {tempArr.map((e, k) => (
        <SearchResult key={k} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Search;
