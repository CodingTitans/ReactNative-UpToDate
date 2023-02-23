import React from 'react';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';

interface Props {
  route: {
    params: {
      title: string;
      imageUrl: string;
      description: string;
    };
  };
}

const Article = ({route}: Props) => {
  const {title, imageUrl, description} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default Article;
