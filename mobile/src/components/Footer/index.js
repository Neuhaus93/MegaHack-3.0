import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Foundation, FontAwesome } from '@expo/vector-icons';

const ICON_SIZE = 36;

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Foundation name='projection-screen' size={ICON_SIZE} color='#8890A6' />
        <FontAwesome name='graduation-cap' size={ICON_SIZE} color='#8890A6' />
        <View />
        <FontAwesome name='heart' size={ICON_SIZE} color='#8890A6' />
        <FontAwesome name='user' size={ICON_SIZE} color='#8890A6' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderTopWidth: 5,
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderColor: '#000',
    height: 80,
    alignSelf: 'stretch',
    elevation: 1,
  },

  icons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Footer;
