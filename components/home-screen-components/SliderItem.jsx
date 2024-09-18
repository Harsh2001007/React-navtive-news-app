import 'react-native-gesture-handler';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

export default function SliderItem({slideItem, index, scrollX}) {
  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.15, 0, width * 0.15],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      key={SliderItem.article_id}
      style={[styles.itemWrapper, rnStyle]}>
      <Image source={{uri: slideItem.image_url}} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.background}>
        <View style={styles.sourceInfo}>
          {slideItem.source_icon && (
            <Image
              source={{uri: slideItem.source_icon}}
              style={styles.sourceIcon}
            />
          )}
          <Text style={styles.sourceName}>{slideItem.source_name}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {slideItem.title}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    position: 'relative',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
  },
  background: {
    position: 'absolute',
    left: 30,
    right: 0,
    top: 0,
    width: width - 60,
    height: 180,
    borderRadius: 20,
    padding: 20,
  },
  sourceIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  sourceInfo: {
    flexDirection: 'row',
    position: 'absolute',
    top: 85,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10,
  },
  sourceName: {
    color: Colors.white,
    fontSize: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: Colors.white,
    position: 'absolute',
    top: 120,
    paddingHorizontal: 20,
    fontWeight: '600',
  },
});
