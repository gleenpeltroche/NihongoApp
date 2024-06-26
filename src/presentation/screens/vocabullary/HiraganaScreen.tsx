import React from 'react';
import VocabullaryList from '../../components/vocabullary/VocabullaryList';
import { hiraganaDakutenList, hiraganaHandakutenList, hiraganaMainList, hiraganaYouonDakutenList, hiraganaYouonHandakutenList, hiraganaYouonList } from '../../../data/hiraganaVocabullary';

export const HiraganaScreen = () => {
  return (
    <VocabullaryList 
      MainList={hiraganaMainList}
      DakutenList={hiraganaDakutenList}
      HandakutenList={hiraganaHandakutenList}
      YouonList={hiraganaYouonList}
      YouonDakutenList={hiraganaYouonDakutenList}
      YouonHandakutenList={hiraganaYouonHandakutenList}
    />
  ) 
}