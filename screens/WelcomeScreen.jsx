import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../constants/Colors';
import Animated, {FadeInDown, FadeInRight} from 'react-native-reanimated';

export default function WelcomeScreen() {
  const navigaton = useNavigation();

  const getStartedNavigationHandler = () => {
    navigaton.navigate('bottom-bar');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/getting-started.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.wrapper}>
          <Animated.Text
            style={styles.title}
            entering={FadeInRight.delay(300).duration(500)}>
            Stay Updated
          </Animated.Text>
          <Animated.Text
            style={styles.description}
            entering={FadeInRight.delay(600).duration(500)}>
            Get breaking news and personalized update directly to your feed.
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(900).duration(500)}>
            <TouchableOpacity
              style={styles.btn}
              onPress={getStartedNavigationHandler}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 30,
    gap: 10,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 26,
    textAlign: 'center',
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: Colors.tint,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 20,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
