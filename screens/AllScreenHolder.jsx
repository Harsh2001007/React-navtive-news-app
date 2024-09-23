import 'react-native-gesture-handler';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import DiscoverScreen from './DiscoverScreen';
import SavedScreen from './SavedScreen';
import SettingScreen from './SettingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ArticleDetail from './ArticleScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomBar() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="discover-screen"
        component={DiscoverScreen}
        options={{headerTitle: 'Discover'}}
      />
      <BottomTab.Screen
        name="saved-screen"
        component={SavedScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="setting-screen"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function AllScreenHolder() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome-screen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="bottom-bar"
          component={BottomBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="article-screen"
          component={ArticleDetail}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('home-screen')}>
                <Icon name="arrow-back-outline" size={22} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Icon name="heart-outline" size={22} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
