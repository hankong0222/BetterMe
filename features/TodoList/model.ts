import { v4 as uuidv4 } from 'uuid';

export type TodoDraft = {
    content: string
    completed: boolean
    dueDate?: string
    priority?: 'low' | 'medium' | 'high'
    notes?: string
}

export type TodoRecord = TodoDraft & {
    id: string
    createdAt: string
    updatedAt?: string
}

export type TodoListState = {
    day: string
    todos: TodoRecord[]
    // anylisis: string, 加AI后再加回来
    // improvements: TodoRecord[], 加AI后再加回来
}

export const createTodoRecord = (todo: TodoDraft): TodoRecord => {
        return {
            id: uuidv4(),
            ...todo,
            createdAt: new Date().toISOString()
        };
}  

export function updateTodoRecord(
        old: TodoRecord,
        patch: Partial<TodoDraft>
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

