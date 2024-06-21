import { StyleSheet } from 'react-native';
import ModalComponent from '../ModalComponent';
import { ModalInterface } from '../../../../infrastructure/interfaces/Modal';
import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';
import { Dispatch, SetStateAction } from 'react';
import GlobalColors from '../../../styles/global.colors';

interface Props extends ModalInterface {
    actual: number;
    setActual: Dispatch<SetStateAction<number>>;
}

const ModalMinnaNoNihongo = ({modalVisible, setModalVisible, actual, setActual}: Props) => {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text category='h4' style={styles.lessonTitle}>Select Lesson</Text>
      {[0,1,2,3,4].map((element) => (
        <ButtonGroup key={element}
            style={{...styles.buttonGroup}}
            status='basic'
        >
            {[1,2,3,4,5].map((chapter, id) => (
                <Button style={[styles.button, actual == element*5+chapter && styles.buttonSelected]} key={id} onPress={() => setActual(element*5+chapter)}>{element*5+chapter}</Button>
            ))}
        </ButtonGroup>
      ))}
    
    </ModalComponent>
  )
}

const styles = StyleSheet.create({
  modalText: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonGroup: {
    margin: 2,
  },
  button: {
    flex: 1,
  },
  buttonSelected: {
    backgroundColor: GlobalColors.lightGrey,
  },
  lessonTitle: {
    fontSize: 18,
    textAlign: 'left',
    color: GlobalColors.grey,
  }
})

export default ModalMinnaNoNihongo;