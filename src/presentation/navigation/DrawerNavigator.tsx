import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import LookAndLearn from '../screens/kanji-look-and-learn/LookAndLearn';
import HiraganaScreen from '../screens/vocabullary/HiraganaScreen';
import KatakanaScreen from '../screens/vocabullary/KatakanaScreen';

const Drawer = createDrawerNavigator();

// TODO: PANTALLA 'HOME'
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="HiraganaScreen" component={HiraganaScreen} options={{title: 'Hiragana Vocabullary'}}/>
      <Drawer.Screen name="KatakanaScreen" component={KatakanaScreen} options={{title: 'Katakana Vocabullary'}}/>
      <Drawer.Screen name="LookAndLearn" component={LookAndLearn} options={{title: 'Kanji Look & Learn'}}/>

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;