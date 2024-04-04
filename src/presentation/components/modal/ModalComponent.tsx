import React, { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { ModalInterface } from '../../../infrastructure/interfaces/Modal';
import { Icon, Text } from '@ui-kitten/components';

interface Props extends PropsWithChildren, ModalInterface {}

const ModalComponent = ({modalVisible, setModalVisible, children}: Props) => {
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => console.log("on close") }
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={styles.close}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Icon name='close-outline'/>
                    </Pressable>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    close: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 40,
        width: 40,
        margin: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        position: 'relative',
        margin: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

export default ModalComponent;