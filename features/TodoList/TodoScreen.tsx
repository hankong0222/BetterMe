import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoList from './TodoList';
import { TodoListState } from './model';
import { useTodoList } from './useTodoList';

const TodoScreen: React.FC = () => {
  const { getList, addTodo: addTodoService, updateTodo } = useTodoList()
  const [todolist, setTodolist] = useState<TodoListState>({ day: new Date().toISOString().slice(0,10), todos: [] })
  const [text, setText] = useState('')

  const handleAdd = async () => {
    if (!text.trim()) return
    const newTodo = await addTodoService(todolist.day, { content: text, completed: false })
    setTodolist(prev => ({ ...prev, todos: [...prev.todos, newTodo] }))
    setText('')
  }

//   const toggleComplete = async (id: string) => {
//     updateTodo(
//       todolist.todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={text}
          onChangeText={setText}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      <TodoList todolist={todolist} toggleComplete={async (id) => {
        const existing = todolist.todos.find(t => t.id === id)
        if (!existing) return
        await updateTodo(todolist.day, id, { completed: !existing.completed })
        setTodolist(prev => ({
          ...prev,
          todos: prev.todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
        }))
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
  },
});

export default TodoScreen;