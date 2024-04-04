import React from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalColors from '../../../styles/global.colors';

const VerticalDivider = () => {
  return (
    <View style={styles.divider}></View>
  )
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: GlobalColors.grey,
        width: 2,
        height: 'auto'
    },
})

export default VerticalDivider;