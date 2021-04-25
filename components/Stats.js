import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridSystem } from '../styles';
import { Feather, Entypo } from '@expo/vector-icons';

const starColors = ['#e3ab53', '#e3ab53', '#e3ab53', '#e3ab53', '#8b6f3a'];

const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Feather name='sun' size={24} color={colors.darkHl} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.title}>22*</Text>
          <Text style={styles.subTitle}>Sunny</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>
          8.4
          <Text style={[styles.subTitle, { paddingLeft: 8 }]}>
            {' '}
            &nbsp; &nbsp; +6k votes
          </Text>
        </Text>
        <View style={gridSystem.rowCenter}>
          {starColors.map((color, index) => {
            return (
              <Entypo
                name='star'
                color={color}
                size={14}
                key={index}
                style={{ marginHorizontal: 2 }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    ...gridSystem.sectionContainer,
    ...gridSystem.rowCenter,
  },
  weatherContainer: {
    ...gridSystem.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: '#444',
    borderRightWidth: 1,
  },
  title: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 18,
  },
  subTitle: {
    color: colors.textSec,
    fontSize: 10,
    fontWeight: '800',
  },
});
