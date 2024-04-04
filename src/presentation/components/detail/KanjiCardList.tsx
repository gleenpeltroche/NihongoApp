import { Text } from "@ui-kitten/components";
import { FlatList } from "react-native";
import KanjiCardButton from "./KanjiCardButton";
import { LookAndLearnKanjiInterface } from "../../../infrastructure/interfaces/KanjiLookAndLearn";

interface Props {
    itemChapter: LookAndLearnKanjiInterface
}

const KanjiCardList = ({itemChapter}: Props) => {
    return (
        <>
            {/* <Text category='h2'style={{fontSize: 32}}>{`第${itemChapter.chapter}課`}</Text>
            <FlatList
                data={itemChapter.}
                renderItem={({item}) => <KanjiCardButton item={item}/>}
                keyExtractor={item => item.kanji}
                numColumns={4}
                style={{marginBottom: 20}}
                scrollEnabled={false}
            /> */}
        </> 
    );
};

export default KanjiCardList;