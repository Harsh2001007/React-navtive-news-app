import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import newsCategoryList from '../../constants/Categories';
import {Colors} from '../../constants/Colors';
import {measure} from 'react-native-reanimated';

export default function TrendingArticles({onCategoryChange}) {
  const scrollRef = useRef(null);
  const itemRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const hanldeSelectCategory = index => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure(x => {
      scrollRef.current?.scrollTo({x: x - 20, y: 0, animated: true});
    });

    onCategoryChange(newsCategoryList[index].slug);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Right Now</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {newsCategoryList.map((item, index) => (
          <TouchableOpacity
            ref={el => (itemRef.current[index] = el)}
            style={[styles.item, activeIndex === index && styles.itemActive]}
            onPress={() => hanldeSelectCategory(index)}>
            <Text
              style={[styles.text, activeIndex === index && styles.activeText]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: Colors.darkGrey,
    letterSpacing: 0.5,
  },
  itemActive: {
    backgroundColor: Colors.tint,
    borderColor: Colors.tint,
  },
  activeText: {
    color: Colors.white,
    fontWeight: '700',
  },
});
