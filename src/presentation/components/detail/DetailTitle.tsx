import React from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalStyles from '../../styles/global.styles';
import { Text } from '@ui-kitten/components';
import { KanjiDetail } from '../../../domain/entities/kanjiDetail';

interface Props {
    detail: KanjiDetail
}

const DetailTitle = ({detail}: Props) => {
  return (
    <View style={GlobalStyles.columnContainer}>
        <Text
            style={styles.kanjiTitle}
        >{detail.character}</Text>
        <Text
            style={styles.kanjiSubtitle}
            category='label'
            appearance='hint'
        >{detail.meaning.english}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    kanjiTitle: {
        fontSize: 128,
        marginTop: 16
    },
    kanjiSubtitle: {
        fontSize: 36
    },
    backgroundVideo: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        borderColor: 'black',
        borderWidth: 3
    }
})

export default DetailTitle;