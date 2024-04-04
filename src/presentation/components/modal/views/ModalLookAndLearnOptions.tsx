import { Button, ButtonGroup, Text, Toggle } from "@ui-kitten/components";
import { ModalInterface } from "../../../../infrastructure/interfaces/Modal";
import ModalComponent from "../ModalComponent";
import { Pressable, StyleSheet, View } from "react-native";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LookAndLearnMainList1, LookAndLearnMainList2, LookAndLearnMainList3 } from "../../../../data/LookAndLearn";
import SimpleHorizontalDivider from "../../shared/divider/SimpleHorizontalDivider";
import { lookAndLearnOptionsStore } from "../../../store/lookAndLearnOptionsStore";
import GlobalColors from "../../../styles/global.colors";
import { LookAndLearnKanjiInterface } from "../../../../infrastructure/interfaces/KanjiLookAndLearn";

interface Props extends ModalInterface {
  setKanjiList: Dispatch<SetStateAction<any>>;
  kanjiList: LookAndLearnKanjiInterface[]
}

const ModalLookAndLearnOptions = ({modalVisible, setModalVisible, setKanjiList, kanjiList}: Props) => {
  
  const checkedLevel5 = lookAndLearnOptionsStore(state => state.checkedLevel5);
  const checkedLevel4 = lookAndLearnOptionsStore(state => state.checkedLevel4);
  const checkedLevel3 = lookAndLearnOptionsStore(state => state.checkedLevel3);
  const showMeaning = lookAndLearnOptionsStore(state => state.showMeaning);
  const isRandomList = lookAndLearnOptionsStore(state => state.isRandomList);
  const listMode = lookAndLearnOptionsStore(state => state.listMode);

  const changeCheckedLevel5 = lookAndLearnOptionsStore(state => state.changeCheckedLevel5);
  const changeCheckedLevel4 = lookAndLearnOptionsStore(state => state.changeCheckedLevel4);
  const changeCheckedLevel3 = lookAndLearnOptionsStore(state => state.changeCheckedLevel3);
  const changeShowMeaning = lookAndLearnOptionsStore(state => state.changeShowMeaning);
  const changeToRandomList = lookAndLearnOptionsStore(state => state.changeToRandomList);
  const changeListMode = lookAndLearnOptionsStore(state => state.changeListMode);

  useEffect(() => {
    setKanjiListByJLPTLevel();
  }, [checkedLevel5, checkedLevel4, checkedLevel3])

  useEffect(() => {
    setKanjiListByJLPTLevel();
  }, [isRandomList])
  
  const setKanjiListByJLPTLevel = () => {
    let kanjiListByLevel: any[] = [];
    if(checkedLevel5) kanjiListByLevel = [...kanjiListByLevel, ...LookAndLearnMainList1];
    if(checkedLevel4) kanjiListByLevel = [...kanjiListByLevel, ...LookAndLearnMainList2];
    if(checkedLevel3) kanjiListByLevel = [...kanjiListByLevel, ...LookAndLearnMainList3];
    if(isRandomList) {
      setKanjiList(GetShuffleList(kanjiListByLevel));
    } else {
      setKanjiList(kanjiListByLevel);
    }
  }

  const onLearningModeSelected = () => {
    changeListMode('LEARNING');
    changeToRandomList(false);
  }

  const onPracticeModeSelected = () => {
    changeListMode('PRACTICE');
    changeShowMeaning(false);
  }

  const GetShuffleList = (kanjiListByLevel: LookAndLearnKanjiInterface[]) => {
    return kanjiListByLevel
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}>
      
      <Text style={styles.title}>List Mode</Text>
      <ButtonGroup>
        <Button
          onPress={onLearningModeSelected}
          style={listMode !== 'LEARNING' && styles.disableButton}
        >LEARNING</Button>
        <Button
          onPress={onPracticeModeSelected}
          style={listMode !== 'PRACTICE' && styles.disableButton}
        >PRACTICE</Button>
      </ButtonGroup>
      
      <SimpleHorizontalDivider />
      <Text style={styles.title}>{ 
        listMode === 'PRACTICE' ? 'Practice Options' : 
        listMode === 'LEARNING' ? 'Learning Options' : 'No options'
      }</Text>

      { listMode === 'LEARNING' && 
        <>
          <Toggle
            checked={showMeaning}
            onChange={changeShowMeaning}
            style={styles.toggle}
          >Show meaning</Toggle> 
        </>
      }

      { listMode === 'PRACTICE' && 
        <>
          <Toggle
            checked={isRandomList}
            onChange={changeToRandomList}
            style={styles.toggle}
          >Random List</Toggle>
        </>
      }
      
      <SimpleHorizontalDivider />
      
      <Text style={styles.title}>JLPT Kanji level</Text>
      <Toggle
        checked={checkedLevel5}
        onChange={changeCheckedLevel5}
        style={styles.toggle}
      >JLPT 5</Toggle>
      <Toggle
        checked={checkedLevel4}
        onChange={changeCheckedLevel4}
        style={styles.toggle}
      >JLPT 4</Toggle>
      <Toggle
        checked={checkedLevel3}
        onChange={changeCheckedLevel3}
        style={styles.toggle}
      >JLPT 3</Toggle>
    </ModalComponent>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 8,
    fontSize: 16
  },
  toggle: {
    marginVertical: 8
  },
  disableButton: {
    backgroundColor: GlobalColors.lightGrey,
  }
})

export default ModalLookAndLearnOptions;