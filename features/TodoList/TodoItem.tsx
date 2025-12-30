import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TodoRecord } from './model';

interface TodoItemProps {
  todo: TodoRecord;
  toggleComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <TouchableOpacity onPress={() => toggleComplete(todo.id)}>
      <View style={styles.item}>
        <Text style={todo.completed ? styles.completedText : styles.text}>{todo.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;