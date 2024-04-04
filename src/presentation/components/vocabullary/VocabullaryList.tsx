import React, { useEffect, useState } from 'react';
import { VocabullaryRowList } from '../../../infrastructure/interfaces/vocabullary';
import { VocabullaryOptionType } from '../../../infrastructure/types/Vocabullary';
import { FlatList, Switch } from 'react-native';
import GlobalColors from '../../styles/global.colors';
import { Button, Layout, Text } from '@ui-kitten/components';
import { VocabullaryOption } from '../../../domain/enums/Vocabullary';
import VocabullaryRow from './VocabullaryRow';

interface Props {
    MainList: VocabullaryRowList[],
    DakutenList: VocabullaryRowList[],
    HandakutenList: VocabullaryRowList[],
    YouonList: VocabullaryRowList[],
    YouonDakutenList: VocabullaryRowList[],
    YouonHandakutenList: VocabullaryRowList[],
}

const VocabullaryList = ({
    MainList,
    DakutenList,
    HandakutenList,
    YouonList,
    YouonDakutenList,
    YouonHandakutenList
}: Props) => {
    
    const [data, setData] = useState<VocabullaryRowList[]>(MainList);
    const [option, setOption] = useState<VocabullaryOptionType>(VocabullaryOption.MAIN);
    const [isYouon, setIsYouon] = useState<boolean>(false);

    useEffect(() => {
        setArrayListByOption();
    }, [option, isYouon])

    const setArrayListByOption =() => {
        if(option === VocabullaryOption.MAIN && !isYouon) {
            setMainList();
        } else if (option === VocabullaryOption.DAKUTEN && !isYouon) {
            setNewArrayList(DakutenList);
        } else if (option === VocabullaryOption.HANDAKUTEN && !isYouon) {
            setNewArrayList(HandakutenList);
        } else if (option === VocabullaryOption.MAIN && isYouon) {
            setNewArrayList(YouonList);
        } else if (option === VocabullaryOption.DAKUTEN && isYouon) {
            setNewArrayList(YouonDakutenList);
        } else if (option === VocabullaryOption.HANDAKUTEN && isYouon) {
            setNewArrayList(YouonHandakutenList);
        }
    }

    const setMainList = () => {
        setData(MainList);
    }

    const setNewArrayList = (arrayToShow: VocabullaryRowList[]) => {
        const rowsArray = arrayToShow.map(element => element.row);
        const newArray = MainList.filter(element => !rowsArray.includes(element.row));
        const disorderArray = [...newArray, ...arrayToShow].sort((a,b) => a.row - b.row);
        setData(disorderArray);
    }

    return (
    <Layout style={{flex: 1}}>
        <FlatList
            data={data}
            renderItem={({item}) => <VocabullaryRow values={item} isYouon={isYouon} option={option}/>}
            keyExtractor={item => String(item.row)}
            numColumns={1}
        />
        <Layout style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 10, borderTopWidth: 1, borderColor: GlobalColors.grey}}>
            <Layout style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Button
                    onPress={() => setOption(VocabullaryOption.MAIN)}
                    status={option === VocabullaryOption.MAIN ? 'primary' : 'basic'}
                    appearance={option === VocabullaryOption.MAIN ? 'filled' : 'outline'}
                >Main</Button>
                <Button
                    onPress={() => setOption(VocabullaryOption.DAKUTEN)}
                    status={option === VocabullaryOption.DAKUTEN ? 'primary' : 'basic'}
                    appearance={option === VocabullaryOption.DAKUTEN ? 'filled' : 'outline'}
                >Ten-ten</Button>
                <Button
                    onPress={() => setOption(VocabullaryOption.HANDAKUTEN)}
                    status={option === VocabullaryOption.HANDAKUTEN ? 'primary' : 'basic'}
                    appearance={option === VocabullaryOption.HANDAKUTEN ? 'filled' : 'outline'}
                >Maru</Button>
            </Layout>
            <Layout style={{alignItems: 'center'}}>
                <Text style={{color: GlobalColors.grey, fontWeight: '700'}}>Youon List</Text>
                <Switch
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], margin: 4 }}
                    trackColor={{false: GlobalColors.lightGrey, true: '#81b0ff'}}
                    thumbColor={isYouon ? '#3366ff' : GlobalColors.grey}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsYouon}
                    value={isYouon}
                />
            </Layout>
        </Layout>
    </Layout>
  )
}
  
export default VocabullaryList;