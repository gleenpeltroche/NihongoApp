import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNavigationStack } from '../../navigation/StackNavigator';

const ErrorApiScreen = () => {
    
    const navigation = useNavigation<NavigationProp<RootNavigationStack, 'KanjiDetail'>>();

    return (
        <View style={styles.containerFullScreen}>
            <Text style={{marginBottom: 8, fontSize: 80}}>🙇</Text>
            <View style={styles.messageContainer}>
                <Text category='h4' style={{marginBottom: 12}}>エラーが発生しました</Text>
                <Text category='p1'>Couldn't communicate with the server</Text>
                <Text category='p1' style={{marginBottom: 32}}>Please, try again later</Text>
                <Text category='h6'>If the problem persists...</Text>
                <Text category='p1'>Contact us</Text>  
            </View>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFullScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer: {
        alignItems: 'center',
        width: 280,
        marginBottom: 48
    }
});

export default ErrorApiScreen;