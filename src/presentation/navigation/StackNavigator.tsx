import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import KanjiDetail from '../screens/kanji/KanjiDetail';

export type RootNavigationStack = {
  Main: undefined,
  Prueba: PageProps,
  lookAndLearn: undefined,
  KanjiDetail: PagePropsKanjiDetail,
  loadingScreen: undefined
}

interface PageProps {
  id: number, 
  title: string,
  text: string,
}

interface PagePropsKanjiDetail {
  kanji: string, 
}

const Stack = createNativeStackNavigator<RootNavigationStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator}/>
        <Stack.Screen name="KanjiDetail" component={KanjiDetail} options={{
          animation: 'fade',
        }}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;