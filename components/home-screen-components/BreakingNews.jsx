import 'react-native-gesture-handler';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import SliderItem from './SliderItem';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function BreakingNews({newList}) {
  const [data, setData] = useState(newList);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef();

  //scroll handler

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <Animated.FlatList
          data={data}
          keyExtractor={(_, index) => `list_item${index}`}
          renderItem={({item, index}) => (
            <SliderItem slideItem={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.5}
          onEndReached={() => setData([...data, ...newList])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  slideWrapper: {
    justifyContent: 'center',
  },
});
