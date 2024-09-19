import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
    const [ enteredText,setEnteredText ] = useState('');

    function goalInputHandler (enteredText) {
        setEnteredText(enteredText);
    };

    function addInputHandler() {
        props.addGoalhandler(enteredText);
        setEnteredText('');
    } 

    return( 
       <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer} >
                <Image style={styles.images} source={require("./assets/images/favicon.png")}/>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
                <View style={styles.ButtonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Add Goal'  onPress={addInputHandler} color='#5e0acc'/>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Cancel'  onPress={props.endAddGoalHandler} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal> 
    )
}

const styles =  StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: '80%',
        marginRight: 8,
        padding:16,
        color: '#120438'
    },
    ButtonContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    buttonStyle: {
        width: 100,
        marginHorizontal: 8
    },
    images: {
        width: 100,
        height: 100,
        margin: 20
    }
});