export type TodoItem = {
    title: string
    completed: boolean
    dueDate?: string
    priority?: 'low' | 'medium' | 'high'
    notes?: string
}

export type TodoRecord = TodoItem & {
    id: string
    createdAt: string
    updatedAt: string
}

export type TodoListState = {
    day: string
    todos: TodoItem[]
    // anylisis: string, 加AI后再加回来
    // improvements: TodoItem[], 加AI后再加回来
}

