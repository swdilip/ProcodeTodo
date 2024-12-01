import React, {useState} from "react";
import { View, Text, FlatList, Pressable, StyleSheet} from "react-native";
import AddToDoForm from "../components/AddToDoForm";
import ToDoItem from "../components/ToDo";
import { ToDo } from "../types";

export default function Home(){

    const [todos, setTodos] = useState<ToDo []>([])
    const [newTodo, setNewTodo]= useState("")
    const [addFormVisible, setAddFormVisible]= useState(false)

    const addTodo = () => {
        setTodos([...todos, {id: Date.now(), text: newTodo}]) //Utilise current date for unique ID for each To-do
    }

    const deleteTodo = (id: Number) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const toggleAddFormVisibility = () => {
        setAddFormVisible(!addFormVisible)
    }

    return(<View style={styles.HomeContainer}>
            <AddToDoForm 
                visible={addFormVisible} 
                toggleVisible={toggleAddFormVisibility} 
                toDoText={newTodo} 
                setNewTodoText={setNewTodo} 
                addTodo={addTodo}
            />
            <Pressable onPress={toggleAddFormVisibility} style={styles.AddNewButton}>
                <Text style={styles.AddButtonText}>Add New To-Do</Text>
            </Pressable>
            <FlatList 
                data={todos} 
                ListEmptyComponent={<Text style={styles.EmptyText}>To-Do list is empty</Text>} 
                renderItem={todo => <ToDoItem todo={todo.item} deleteTodo={deleteTodo}/>}
            />
        </View>)
}

const styles = StyleSheet.create({
    HomeContainer:{
        flex: 1,
        alignItems: 'center',
    },
    AddNewButton: {
        marginVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        padding: 4,
        borderRadius: 6,
        borderColor: '#39bd19',
        backgroundColor: '#baf5d2',
        marginTop: 20
    },
    AddButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#39bd19'
    },
    EmptyText: {
        fontSize: 18,
        color: '#525453'
    }
})