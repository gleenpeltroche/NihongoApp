import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen, LookAndLearn, HiraganaScreen, KatakanaScreen, MinnaNoNihongo} from '../screens';

const Drawer = createDrawerNavigator();

// TODO: PANTALLA 'HOME'
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="HiraganaScreen" component={HiraganaScreen} options={{title: 'Hiragana Vocabullary'}}/>
      <Drawer.Screen name="KatakanaScreen" component={KatakanaScreen} options={{title: 'Katakana Vocabullary'}}/>
      <Drawer.Screen name="LookAndLearn" component={LookAndLearn} options={{title: 'Kanji Look & Learn'}}/>
      <Drawer.Screen name="MinnaNoNihongo" component={MinnaNoNihongo} options={{title: 'Minna No Nihongo'}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;