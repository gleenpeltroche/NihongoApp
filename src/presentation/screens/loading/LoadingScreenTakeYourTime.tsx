import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

const LoadingScreenTakeYourTime = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/imgs/take-your-time.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 405/2,
    height: 588/2,
    opacity: 0.5,
  },
});

export default LoadingScreenTakeYourTime;