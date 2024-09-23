import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Loader from '../components/MicroComponents/Loader';
import axios from 'axios';

export default function ArticleDetail({route}) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {myKey} = route.params;

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const API_URL = `https://newsdata.io/api/1/news?apikey=pub_53587c3b9469dbcbd6f9c0f485b10beb5d828&id=${myKey.article_id}`;

      const response = await axios.get(API_URL);
      if (response && response.data) {
        setNews(response.data.results);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log('data redirected');

  console.log('the absolute key is ->', myKey.article_id);
  console.log('news is ', news);
  return (
    <>
      {isLoading ? (
        <Loader size={'large'} />
      ) : (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.newsTitleText}>{news[0].title}</Text>
          <View style={styles.titleInfo}>
            <Text>{news[0].pubDate}</Text>
            <Text>{news[0].source_name}</Text>
          </View>
          <Image source={{uri: news[0].image_url}} style={styles.image} />
          {news[0].content ? (
            <Text>{news[0].content}</Text>
          ) : (
            <Text>{news[0].description}</Text>
          )}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 20,
  },
  newsTitleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  titleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginTop: 10,
  },
});
