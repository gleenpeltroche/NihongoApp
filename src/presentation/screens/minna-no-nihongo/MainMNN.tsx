import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import GlobalColors from "../../styles/global.colors";
import GrammaticalNote from "../../components/detail/grammaticalNote";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigationStack } from "../../navigation/StackNavigator";
import HeaderButton from "../../components/header/HeaderButton";
import ModalMinnaNoNihongo from "../../components/modal/views/ModalMinnaNoNihongo";
import { Utils } from "../../utils/utils";
import { GrammarLesson } from "../../../infrastructure/interfaces/MinnaNoNihongo.interface";


export const MinnaNoNihongo = () => {

  const navigation = useNavigation<NavigationProp<RootNavigationStack>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [actual, setActual] = useState(1);
  const [grammarLesson, setGrammarLesson] = useState<GrammarLesson[]>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton runFunctionOnPress={() => setModalVisible(true)} marginRight={8} iconName='keypad'/>
    })
  }, [])

  useEffect(() => {
    setGrammarLesson(Utils.getGrammarLesson(actual));
  }, [actual])

  return (
    <>
    
    <ModalMinnaNoNihongo modalVisible={modalVisible} setModalVisible={setModalVisible} actual={actual} setActual={setActual}/>
    <Layout style={styles.lessonContainer}>
      <Text style={styles.title}>{`第${actual}課`}</Text>
    </Layout>
    <ScrollView style={styles.ScrollViewStyle}>
      <Layout style={styles.layout}>
        {grammarLesson && grammarLesson.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
      </Layout>
    </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: 'white',
    marginTop: -16,
  },
  lessonContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    right: 8,
    backgroundColor: 'transparent'
  },
  layout: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  title: {
    color: GlobalColors.grey,
    alignSelf: 'center',
    fontSize: 24,
    padding: 2,
    opacity: 0.25
  }
});