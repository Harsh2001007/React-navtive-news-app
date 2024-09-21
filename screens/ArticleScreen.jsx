import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
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
    <SafeAreaView>
      <Text>[id] - article scren - {myKey.article_id}</Text>
      {isLoading ? (
        <Loader size={'large'} />
      ) : (
        <Text>[id] - {news[0].title}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
