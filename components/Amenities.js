import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gridSystem, colors } from '../styles';
import { Feather, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';

const Amenities = () => {
  return (
    <View style={gridSystem.sectionContainer}>
      <Text style={gridSystem.sectionTitle}> Amenities</Text>

      <View style={styles.amenitiesContainer}>
        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <Feather name='wifi' size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Wi-Fi</Text>
        </View>

        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name='md-restaurant' size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Hotel Restaurant</Text>
        </View>

        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <FontAwesome5 name='swimmer' size={20} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Swimming Pool</Text>
        </View>

        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <Entypo name='drink' size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Bar</Text>
        </View>

        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name='ios-car' size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Parking</Text>
        </View>

        <View style={styles.AmenityContainer}>
          <View style={styles.amenity}>
            <Feather name='speaker' size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Night Club</Text>
        </View>
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({
  amenitiesContainer: {
    ...gridSystem.rowBetween,
    flexWrap: 'wrap',
    marginTop: 16,
    marginHorizontal: 16,
  },
  AmenityContainer: {
    alignItems: 'center',
    width: 80,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    backgroundColor: '#444',
    ...gridSystem.center,
    borderRadius: 48 / 2,
  },
  amenityName: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 12,
    color: colors.lightHl,
    fontWeight: '600',
  },
});
