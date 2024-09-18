import 'react-native-gesture-handler';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/home-screen-components/Header';
import Searchbar from '../components/home-screen-components/Searchbar';
import axios from 'axios';
import BreakingNews from '../components/home-screen-components/BreakingNews';

export default function HomeScreen() {
  const {top: marginTop} = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const API_URL = `https://newsdata.io/api/1/news?apikey=pub_53587c3b9469dbcbd6f9c0f485b10beb5d828&country=in&language=en&image=1&removeduplicate=1&size=5`;

      const response = await axios.get(API_URL);
      if (response && response.data) {
        setBreakingNews(response.data.results);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(breakingNews);
  return (
    <View style={[styles.container, {paddingTop: marginTop}]}>
      <Header />
      <Searchbar />
      {/* {breakingNews.map((item, index) => {
        return (
          <Image
            source={{uri: item.image_url}}
            style={{height: 100, width: 100}}
          />
        );
      })} */}
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <BreakingNews newList={breakingNews} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
