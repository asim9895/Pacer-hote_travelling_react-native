import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { gridSystem } from '../styles';

const Header = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/1.jpg')}
        style={{ width: '100%', height: 300 }}
      />

      <View style={styles.topButtons}>
        <AntDesign name='close' size={24} color='#fff' />

        <View style={gridSystem.rowCenter}>
          <AntDesign name='save' size={24} style={styles.topButtonRight} />
          <AntDesign name='sharealt' size={24} style={styles.topButtonRight} />
          <Entypo
            name='dots-three-vertical'
            size={18}
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topButtons: {
    ...gridSystem.rowBetween,
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
  topButtonRight: {
    color: '#fff',
    marginLeft: 18,
  },
});
