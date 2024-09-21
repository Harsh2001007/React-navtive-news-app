import 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/home-screen-components/Header';
import Searchbar from '../components/home-screen-components/Searchbar';
import axios from 'axios';
import BreakingNews from '../components/home-screen-components/BreakingNews';
import TrendingArticles from '../components/home-screen-components/TrendingArticles';
import NewsList from '../components/home-screen-components/NewsList';
import Loader from '../components/MicroComponents/Loader';

export default function HomeScreen() {
  const {top: marginTop} = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
    getNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const API_URL = `https://newsdata.io/api/1/news?apikey=pub_53587c3b9469dbcbd6f9c0f485b10beb5d828&language=en&image=1&removeduplicate=1&size=5`;

      const response = await axios.get(API_URL);
      if (response && response.data) {
        setBreakingNews(response.data.results);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getNews = async category => {
    try {
      let categoryString = '';
      if (category.length !== 0) {
        categoryString = `&category=${category}`;
      }
      const API_URL = `https://newsdata.io/api/1/news?apikey=pub_53587c3b9469dbcbd6f9c0f485b10beb5d828&language=en&image=1&removeduplicate=1&size=10${categoryString}`;

      const response = await axios.get(API_URL);
      if (response && response.data) {
        setNews(response.data.results);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onCategoryChange = category => {
    console.log('category', category);
    setNews([]);
    getNews(category);
  };

  return (
    <ScrollView style={[styles.container, {paddingTop: marginTop}]}>
      <Header />
      <Searchbar />
      {isLoading ? (
        <Loader size={'large'} />
      ) : (
        <BreakingNews newList={breakingNews} />
      )}
      <TrendingArticles onCategoryChange={onCategoryChange} />
      <NewsList newsList={news} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
