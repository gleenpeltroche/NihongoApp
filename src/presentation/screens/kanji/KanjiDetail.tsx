import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { type RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { type RootNavigationStack } from '../../navigation/StackNavigator';
import { getKanjiDetail } from '../../../actions/kanji/getKanjis';
import { KanjiDetail as KanjiDetailEntity } from '../../../domain/entities/kanjiDetail';
import SimpleHorizontalDivider from '../../components/shared/divider/SimpleHorizontalDivider';
import DetailExamples from '../../components/detail/DetailExamples';
import DetailOnyomiKunyomi from '../../components/detail/DetailOnyomiKunyomi';
import DetailTitle from '../../components/detail/DetailTitle';
import LoadingScreen from '../loading/LoadingScreen';
import ModalViewVideo from '../../components/modal/views/ModalVideoDetail';
import HeaderButton from '../../components/header/HeaderButton';

const KanjiDetail = () => {
    
    const {params} = useRoute<RouteProp<RootNavigationStack, 'KanjiDetail'>>();
    
    const navigator = useNavigation<NavigationProp<RootNavigationStack>>();

    const [stateKanjiDetail, setStateKanjiDetail] = useState<KanjiDetailEntity>();
    const [loading, setLoading] = useState<boolean>(true);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        navigator.setOptions({
            headerRight: () => <HeaderButton runFunctionOnPress={functionOnPress} iconName='edit-2-outline'/>,
        })
    }, [])
    
    useEffect(() => {
        params?.kanji && getDetail(params.kanji);
    }, [])

    const functionOnPress = () => {
        setModalVisible(true);
    }

    const getDetail = async(character: string) => {
        const detail = await getKanjiDetail(character);
        navigator.setOptions({
            headerShown: true,
            title: `Kanji  ${params.kanji}`,
        })
        setStateKanjiDetail(detail);
        setLoading(false);
    }

    if(loading){
        return (
            <LoadingScreen />
        )
    }

    if(!loading && stateKanjiDetail){
        return (
            <ScrollView>
                <ModalViewVideo modalVisible={modalVisible} setModalVisible={setModalVisible} data={stateKanjiDetail}/>
                <DetailTitle detail={stateKanjiDetail} />
                <SimpleHorizontalDivider />
                <DetailOnyomiKunyomi detail={stateKanjiDetail}/>
                <SimpleHorizontalDivider />
                <DetailExamples detail={stateKanjiDetail}/>
                <SimpleHorizontalDivider />
            </ScrollView>
        )
    }
}

export default KanjiDetail;