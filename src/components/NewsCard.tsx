import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  navigation: any;
  title: string;
  imageUrl: string;
  description: string;
  published: string;
}

const NewsCard = ({
  navigation,
  title,
  imageUrl,
  description,
  published,
}: Props) => {
  const onPress = () => {
    navigation.navigate('Article', {title, imageUrl, description, published});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} style={styles.cardImage} />
        ) : null}
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPublished}>{published}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 10,
  },
  cardTextContainer: {
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardPublished: {
    fontSize: 14,
    color: '#999',
  },
});

export default NewsCard;
