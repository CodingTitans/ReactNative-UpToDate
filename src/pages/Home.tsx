import * as React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import axios from 'axios';

import NewsCard from '../components/NewsCard';

interface Article {
  url: string;
  title: string;
  image: string;
  description: string;
  published: string;
}

const Home = ({navigation}: {navigation: any}) => {
  const [news, setNews] = React.useState<Article[]>([]);

  React.useEffect(() => {
    const apiKey = 'WPTVRN2UoZYACLhBejlWMTNkEOQ4r-lYpBymUItdnBw4s5gh';
    const apiUrl = `https://api.currentsapi.services/v1/search?keywords=tech&language=en&apiKey=${apiKey}`;

    axios.get(apiUrl).then(response => {
      const newsWithImages = response.data.news.filter(
        (article: Article) => article.image !== '',
      ); // Only keep news with non-empty image URLs

      console.log(newsWithImages);
      setNews(newsWithImages as Article[]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {news.map((article: Article) => (
            <View key={article.url} style={styles.cardWrapper}>
              <NewsCard
                navigation={navigation}
                title={article.title}
                imageUrl={article.image}
                description={article.description}
                published={article.published}
              />
            </View>
          ))}
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
  scrollView: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginBottom: 10,
  },
  cardWrapper: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
});

Home.displayName = 'Home';

export default Home;
