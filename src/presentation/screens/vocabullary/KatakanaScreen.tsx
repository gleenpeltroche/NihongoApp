import React from 'react';
import VocabullaryList from '../../components/vocabullary/VocabullaryList';
import { katakanaDakutenList, katakanaHandakutenList, katakanaMainList, katakanaYouonDakutenList, katakanaYouonHandakutenList, katakanaYouonList } from '../../../data/katakanaVocabullary';

export const KatakanaScreen = () => {
  return (
    <VocabullaryList 
      MainList={katakanaMainList}
      DakutenList={katakanaDakutenList}
      HandakutenList={katakanaHandakutenList}
      YouonList={katakanaYouonList}
      YouonDakutenList={katakanaYouonDakutenList}
      YouonHandakutenList={katakanaYouonHandakutenList}
    />
  ) 
}