import { StyleSheet, Text, View } from 'react-native';
import ModalComponent from '../ModalComponent';
import { ModalInterface } from '../../../../infrastructure/interfaces/Modal';

interface Props extends ModalInterface {
  
}

const ModalTemplate = ({modalVisible, setModalVisible}: Props) => {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text style={styles.modalText}>Hello from Modal!</Text>
    </ModalComponent>
  )
}

const styles = StyleSheet.create({
  modalText: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default ModalTemplate;