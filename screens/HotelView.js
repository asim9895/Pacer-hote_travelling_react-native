import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from '../components/About';
import Bookmark from '../components/Bookmark';
import Header from '../components/Header';
import Stats from '../components/Stats';
import { colors } from '../styles';

const HotelView = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Header />
      <View>
        <Bookmark />
        <About />
        <Stats />
      </View>
    </View>
  );
};

export default HotelView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
