import React, { useEffect, useState } from 'react';
import {
  FlatList
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNavigationStack } from '../../navigation/StackNavigator';
import ModalLookAndLearnOptions from '../../components/modal/views/ModalLookAndLearnOptions';
import { LookAndLearnKanjiInterface } from '../../../infrastructure/interfaces/KanjiLookAndLearn';
import HeaderButton from '../../components/header/HeaderButton';
import KanjiCardButton from '../../components/detail/KanjiCardButton';

const LookAndLearn = () => {

  const navigation = useNavigation<NavigationProp<RootNavigationStack>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [kanjiList, setKanjiList] = useState<LookAndLearnKanjiInterface[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton runFunctionOnPress={functionOnPress} marginRight={8} iconName='settings-outline'/>
    })
  }, [])
  
  const functionOnPress = () => {
    setModalVisible(true);
  }

  return (
    <>
      <ModalLookAndLearnOptions modalVisible={modalVisible} setModalVisible={setModalVisible} setKanjiList={setKanjiList} kanjiList={kanjiList}/>
      <FlatList
        data={kanjiList}
        renderItem={({item}) => <KanjiCardButton item={item}/>}
        keyExtractor={item => item.kanji}
        numColumns={4}
      />
    </>
    
  );
};

export default LookAndLearn;