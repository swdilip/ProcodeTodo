import React from "react";
import { Modal, TextInput, Text, Button, Pressable, Alert, StyleSheet, View } from "react-native";

interface AddToDoFormProps {
    visible: boolean,
    toggleVisible: () => void,
    toDoText: string,
    setNewTodoText: (value: string | ((prev: string) => string)) => void,
    addTodo: () => void

}

export default function AddToDoForm({visible, toggleVisible, toDoText, setNewTodoText, addTodo}: AddToDoFormProps){

    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.ButtonContainer}>
            <TextInput value={toDoText} onChangeText={setNewTodoText} placeholder="Enter To Do..." style={styles.InputField}/>
                <Pressable onPress={()=> {setNewTodoText('')}} 
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? '#7eb6d6'
                                    : 'white'
                                },
                                styles.Button
                                ]}>
                    <Text style={styles.ClearText}>Clear</Text>
                </Pressable>
                <Pressable onPress={()=> {

                    if (toDoText.trim() === '') {
                        Alert.alert('Invalid Input', 'Cannot add an empty todo')
                    } else {
                        addTodo()
                        toggleVisible()
                    }
                }} style={styles.Button}>
                    <Text style={styles.AddText}>Add New To-Do</Text>
                </Pressable>
                <Pressable onPress={toggleVisible} style={styles.Button}>
                    <Text style={styles.CloseText}>Close Form</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    ButtonContainer: {
        flex: 1,
        alignItems: 'center',

    },
    Button: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    ClearText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff0000'
    },
    AddText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#39bd19'
    }, 
    CloseText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f56942'

    },
    InputField: {
        width: '80%',
        height: 50,
        paddingHorizontal: 15, 
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#ccc',
        fontSize: 22,
        marginVertical: 20,
    }
})