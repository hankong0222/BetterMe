import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { TodoListState } from './model';

interface TodoListProps {
  todolist: TodoListState;
  toggleComplete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todolist, toggleComplete }) => {
  return (
    <FlatList
      data={todolist.todos}
      renderItem={({ item }) => (
        <TodoItem todo={item} toggleComplete={toggleComplete} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;