import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridSystem } from '../styles';

const hotel = {
  name: 'Alto Maranica',
  price: '$777',
  location: 'new york',
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gridSystem.title}>{hotel.name}</Text>
      <Text style={gridSystem.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={gridSystem.divider} />

      <Text style={gridSystem.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    ...gridSystem.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  about: {
    color: colors.textSec,
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
    lineHeight: 20,
  },
});
