import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ToDo } from "../types";

interface ToDoItemProps {
    todo: ToDo,
    deleteTodo: (id: Number) => void
}

export default function ToDoItem({todo, deleteTodo}: ToDoItemProps){

    return (
        <View style={styles.ToDoView}>
            <Text style={styles.ToDoContent}>{todo.text}</Text>
            <Pressable onPress={()=> {deleteTodo(todo.id)}} style={styles.DoneButton}>
                <Text style={styles.DoneTick}>☑️</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    DoneButton: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    DoneTick: {
        fontSize: 22,
    },
    ToDoView: {
        paddingLeft: 20,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#757a7d',
    },
    ToDoContent: {
        fontSize: 18,
        maxWidth: '80%'
    }
})