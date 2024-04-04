import { useState, useEffect } from 'react';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { Pressable, StyleSheet } from "react-native";
import { RootNavigationStack } from "../../navigation/StackNavigator";
import { LookAndLearnKanjiInterface } from "../../../infrastructure/interfaces/KanjiLookAndLearn";
import { lookAndLearnOptionsStore } from "../../store/lookAndLearnOptionsStore";
import GlobalColors from "../../styles/global.colors";
import CardButton from '../shared/button/CardButton';

type ItemProps = {item: LookAndLearnKanjiInterface};

const KanjiCardButton = ({item}: ItemProps) => {

  const navigation = useNavigation<NavigationProp<RootNavigationStack>>(); 
  const [showMeaningLocal, setShowMeaningLocal] = useState(false);
  const showMeaningGlobal = lookAndLearnOptionsStore(state => state.showMeaning);
  const listMode = lookAndLearnOptionsStore(state => state.listMode);

  useEffect(() => {
    setShowMeaningLocal(false);
  }, [listMode])
  
  
  const onPressCard = (title: string) => {
    listMode === "LEARNING" 
    ? navigation.navigate('KanjiDetail', {kanji: title})
    : setShowMeaningLocal(!showMeaningLocal)
  };

  return (
    <CardButton
        onPressFunction={ () => onPressCard(item.kanji)}
        title={item.kanji}
    >
      <Text style={styles.absoluteNumber}>{item.number}</Text>
      { (showMeaningGlobal || showMeaningLocal) && <Text style={styles.absoluteMeaning}>{item.meaning}</Text> }
    </CardButton>
  );
};

const styles = StyleSheet.create({
    absoluteNumber: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 3,
      fontSize: 12
    },
    absoluteMeaning: {
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center', 
      alignItems: 'center',
      fontSize: 12,
      color: GlobalColors.grey,
    }
});

export default KanjiCardButton;