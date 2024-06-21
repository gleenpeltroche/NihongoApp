import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import GlobalColors from "../../styles/global.colors";
import GrammaticalNote from "../../components/detail/grammaticalNote";
import { GrammarLesson1, GrammarLesson2, GrammarLesson3, GrammarLesson4, GrammarLesson5 } from "../../../data/GramaticalNotesMNN";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigationStack } from "../../navigation/StackNavigator";
import HeaderButton from "../../components/header/HeaderButton";
import ModalMinnaNoNihongo from "../../components/modal/views/ModalMinnaNoNihongo";


export const MinnaNoNihongo = () => {

  const navigation = useNavigation<NavigationProp<RootNavigationStack>>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton runFunctionOnPress={() => setModalVisible(true)} marginRight={8} iconName='keypad'/>
    })
  }, [])
  
  const [actual, setActual] = useState(1);

  return (
    <>
    
    <ModalMinnaNoNihongo modalVisible={modalVisible} setModalVisible={setModalVisible} actual={actual} setActual={setActual}/>
    <ScrollView style={styles.ScrollViewStyle}>
      <Text category='h2' style={styles.title}>{`第${actual}課`}</Text>
      {actual === 1 && 
        <Layout style={styles.layout}>
          {GrammarLesson1.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
        </Layout>
      }

      {actual === 2 && 
        <Layout style={styles.layout}>
          {GrammarLesson2.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
        </Layout>
      }

      {actual === 3 && 
        <Layout style={styles.layout}>
          {GrammarLesson3.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
        </Layout>
      }

      {actual === 4 && 
        <Layout style={styles.layout}>
          {GrammarLesson4.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
        </Layout>
      }

      {actual === 5 && 
        <Layout style={styles.layout}>
          {GrammarLesson5.map((note, id) => (<GrammaticalNote note={note} id={id} key={id}/>))}
        </Layout>
      }
    </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: 'white'
  },
  layout: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  title: {
    color: GlobalColors.grey,
    alignSelf: 'center',
  }
});