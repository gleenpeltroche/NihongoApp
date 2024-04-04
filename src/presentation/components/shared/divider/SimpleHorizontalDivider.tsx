import React from 'react';
import { StyleSheet, View } from 'react-native';

const SimpleHorizontalDivider = () => {
  return (
    <View style={styles.divider}></View>
  )
}

const styles = StyleSheet.create({
    divider: {
        height: 40,
    }
})

export default SimpleHorizontalDivider;