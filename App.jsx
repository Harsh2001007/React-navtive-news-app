import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import AllScreenHolder from './screens/AllScreenHolder';
import {initialize} from '@microsoft/react-native-clarity';

initialize('qeyesnufht');

function App() {
  return <AllScreenHolder />;
}

const styles = StyleSheet.create({});

export default App;
