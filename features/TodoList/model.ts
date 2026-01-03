import { v4 as uuidv4 } from 'uuid';

export type TodoDraft = {
    content: string
    dueDate?: string
    priority?: 'low' | 'medium' | 'high'
    notes?: string
}

export type TodoRecord = TodoDraft & {
    id: string
    completed: boolean
    createdAt: string
    updatedAt?: string
}

export type TodoListState = {
    day: string
    todos: TodoRecord[]
    // anylisis: string, 加AI后再加回来
    // improvements: TodoRecord[], 加AI后再加回来
}

export function createTodoRecord(
  base: TodoDraft,
  meta: { id: string; createdAt: string }
): TodoRecord {
  return {
    ...base,
    id: meta.id,
    completed: false,
    createdAt: meta.createdAt,
  }
}

export function updateTodoRecord(
        old: TodoRecord,
        patch: Partial<TodoDraft & { completed: boolean }>
        ): TodoRecord {
        return {
            ...old,
            ...patch,
            updatedAt: new Date().toISOString(),
        }
}

export function deleteTodo(
        list: TodoRecord[],
        id: string
        ): TodoRecord[] {
        return list.filter(t => t.id !== id)
}

