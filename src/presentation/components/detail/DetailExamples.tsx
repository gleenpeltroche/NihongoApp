import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../styles/global.styles';
import { Text } from '@ui-kitten/components';
import { KanjiDetail } from '../../../domain/entities/kanjiDetail';

interface Props {
    detail: KanjiDetail
}

const DetailExamples = ({detail}: Props) => {
  return (
    <View style={{...GlobalStyles.columnContainer, marginHorizontal: 20}}>
        <Text
            category='label'
            style={{...GlobalStyles.onkunLabel, alignSelf: 'flex-start'}}
        >Examples</Text>
        {
            detail.exampleList.map((example, index) => (
                <View key={index} style={{alignSelf: 'flex-start', marginHorizontal: 10, marginVertical: 4}} >
                    <Text appearance='hint' style={{fontSize: 18}}>{example.hiragana}</Text>
                    <Text style={{fontSize: 36, marginTop: -8}}>{example.japanese}</Text>
                    <Text appearance='hint' style={{fontSize: 16}}>{example.meaning.english}</Text>
                </View>
            ))
        }
    </View>
  )
}

export default DetailExamples;