import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gridSystem, colors } from '../styles';
import { Feather } from '@expo/vector-icons';

const Bookmark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name='bookmark' color={colors.pink} size={24} />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  bookmark: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    left: 270,
    top: -56 / 2,
    backgroundColor: colors.text,
    borderRadius: 56 / 2,
    ...gridSystem.center,
    zIndex: 10,
  },
});
