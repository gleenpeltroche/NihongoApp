import React from 'react';
import { VocabullaryRowList } from '../../../infrastructure/interfaces/vocabullary';
import { VocabullaryOptionType } from '../../../infrastructure/types/Vocabullary';
import { FlatList, StyleSheet } from 'react-native';
import GlobalColors from '../../styles/global.colors';
import CardButton from '../shared/button/CardButton';
import { Text } from '@ui-kitten/components';
import { VocabullaryOption } from '../../../domain/enums/Vocabullary';

interface Props {
    values: VocabullaryRowList,
    isYouon: boolean,
    option: VocabullaryOptionType,
  }
  
const VocabullaryRow = ({values, isYouon, option}: Props) => {
    return (
        <FlatList
        data={values.list}
        renderItem={({item, index}) => 
            <CardButton title={item.symbol} titleSize={30} styleProps={{ 
                opacity: (values.isMain && (option !== VocabullaryOption.MAIN || isYouon)) ? 0.1 : 1,
                backgroundColor: item.isYouon ? GlobalColors.lightGrey : 'transparent',
            }}>
                <Text style={styles.absoluteMeaning}>{item.meaning}</Text>
            </CardButton>}
        keyExtractor={item => item.symbol}
        numColumns={5}
        scrollEnabled={false}
        />
    )
}

const styles = StyleSheet.create({
    absoluteMeaning: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 14,
        color: GlobalColors.grey,
    },
    disableButton: {
        backgroundColor: GlobalColors.lightGrey,
    }
});
  
export default VocabullaryRow;