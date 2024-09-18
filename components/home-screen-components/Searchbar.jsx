import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/Colors';

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Icon name="search-outline" size={20} color={Colors.lightGrey} />
        <TextInput
          placeholder="Search"
          autoCapitalize=""
          placeholderTextColor={Colors.lightGrey}
          style={styles.searchText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  searchbar: {
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
  },
  searchText: {
    color: Colors.darkGrey,
    flex: 1,
  },
});
