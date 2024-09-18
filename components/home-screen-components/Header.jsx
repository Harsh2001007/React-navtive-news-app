import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/10/3e/16/103e16bef5804a2c7c3482b91d86a9a8.jpg',
          }}
          style={styles.img}
        />
        <View style={{gap: 3}}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.nameText}>Harsh Sachan</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon
          name="notifications-circle-outline"
          size={38}
          color={Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  img: {
    height: 50,
    borderRadius: 30,
    width: 50,
  },
  welcomeText: {
    fontSize: 12,
    color: Colors.darkGrey,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
  },
});
