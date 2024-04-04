import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../styles/global.styles';
import { Text } from '@ui-kitten/components';
import { KanjiDetail } from '../../../domain/entities/kanjiDetail';
import VerticalDivider from '../shared/divider/VerticalDivider';

interface Props {
    detail: KanjiDetail
}

const DetailOnyomiKunyomi = ({detail}: Props) => {
  return (
    <View style={GlobalStyles.rowContainer}>
        <View style={GlobalStyles.columnContainer}>
            <Text
                category='label'
                style={GlobalStyles.onkunLabel}
            >onyomi</Text>
            <View style={GlobalStyles.rowContainer}>
                {detail.onyomiList.map((onyomi, index) => (
                    <View style={GlobalStyles.columnContainer} key={index}>
                        <Text>{onyomi.katakana}</Text>
                        <Text>{onyomi.romaji}</Text>
                    </View>
                ))}
            </View>
        </View>
        <VerticalDivider />
        <View style={GlobalStyles.columnContainer}>
            <Text
                category='label'
                style={GlobalStyles.onkunLabel}
            >kunyomi</Text>
            <View style={GlobalStyles.rowContainer}>
                {detail.kunyomiList.map((kunyomi, index) => (
                    <View style={GlobalStyles.columnContainer} key={index}>
                        <Text>{kunyomi.hiragana}</Text>
                        <Text>{kunyomi.romaji}</Text>
                    </View>
                ))}
            </View>
        </View>
    </View>
  )
}

export default DetailOnyomiKunyomi;