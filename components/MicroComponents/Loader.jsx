import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Loader({size}) {
  return <ActivityIndicator size={size} />;
}

const styles = StyleSheet.create({});
