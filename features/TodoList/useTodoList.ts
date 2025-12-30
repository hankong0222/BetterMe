import { TodoDraft, TodoRecord, TodoListState, createTodoRecord, deleteTodo, updateTodoRecord } from "./model";
import { getTodoListByDay, updateTodoList, saveTodoList } from "./TodoList.service";
import { useState } from "react";

export function useTodoList() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function getList(day: string): Promise<TodoListState> {
    try {
      setLoading(true)
      const list = (await getTodoListByDay(day)) ?? { day, todos: [] }
      return list
    } catch (e) {
      setError((e as Error).message)
      return { day, todos: [] }
    } finally {
      setLoading(false)
    }
  }

  async function addTodo(day: string, draft: TodoDraft): Promise<TodoRecord> {
    const list = await getList(day)
    const newTodo: TodoRecord = createTodoRecord(draft)
    list.todos = [...list.todos, newTodo]
    await saveTodoList(list)
    return newTodo
  }

  async function updateTodo(
    day: string,
    todoId: string,
    patch: Partial<TodoDraft>
  ): Promise<void> {
    const list = await getList(day)
    list.todos = list.todos.map(todo =>
      todo.id === todoId ? updateTodoRecord(todo, patch) : todo
    )
    await saveTodoList(list)
  }

  async function deleteTodo(day: string, todoId: string): Promise<void> {
    const list = await getList(day)
    list.todos = list.todos.filter(todo => todo.id !== todoId)
    await saveTodoList(list)
  }

  return {
    loading,
    error,
    getList,
    addTodo,
    updateTodo,
    deleteTodo,
  }
}