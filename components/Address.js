import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { gridSystem, colors } from '../styles';

const Address = () => {
  return (
    <View>
      <View style={{ backgroundColor: '#000' }}>
        <Image
          source={require('../assets/images/2.jpg')}
          style={{ width: '100%', height: 200, opacity: 0.2 }}
        />
      </View>

      <View style={styles.addressContainer}>
        <Image
          source={require('../assets/images/3.png')}
          style={{ width: 18, height: 18 }}
        />
        <View style={{ marginLeft: 8, marginRight: 24 }}>
          <Text style={gridSystem.sectionTitle}>Address</Text>
          <Text
            style={
              styles.address
            }>{`1529 taylor street, New York\n10011, United States`}</Text>

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity style={styles.checkButton}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.text,
                  fontWeight: '700',
                }}>
                Check It
              </Text>
              <Entypo
                name='chevron-right'
                size={16}
                color={colors.text}
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  addressContainer: {
    ...gridSystem.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 32,
  },
  address: {
    fontSize: 12,
    color: colors.darkHl,
    fontWeight: '600',
    letterSpacing: 1,
    marginTop: 6,
    lineHeight: 20,
  },
  checkButton: {
    ...gridSystem.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderRadius: 20,
  },
});
