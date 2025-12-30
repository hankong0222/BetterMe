// for backend use and AI integration
// for now it's a local storage only implementation
import { TodoDraft, TodoRecord, TodoListState } from '../TodoList/model'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'TODO_LIST_RECORDS'
export class TodoListService {
    async getAllTodoLists(): Promise<TodoListState[]> {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if (json) {
            return JSON.parse(json) as TodoListState[]
        }
        return []
    }
    async saveTodoList(todoList: TodoListState): Promise<void> {
        const allLists = await this.getAllTodoLists()
        const index = allLists.findIndex(list => list.day === todoList.day)
        if (index >= 0) {
            allLists[index] = todoList
        } else {
            allLists.push(todoList)
        }
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(allLists))
    }

    async getTodoListByDay(day: string): Promise<TodoListState | null> {
        const allLists = await this.getAllTodoLists()
        const list = allLists.find(list => list.day === day)
        return list || null
    }

    async updateTodoList(todoList: TodoListState): Promise<void> {
        const allLists = await this.getAllTodoLists()
        const index = allLists.findIndex(list => list.day === todoList.day) 
        if (index >= 0) {
            allLists[index] = todoList
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(allLists))
        }  
    }
    
    async deleteTodoList(day: string): Promise<void> {
        const allLists = await this.getAllTodoLists()
        const filteredLists = allLists.filter(list => list.day !== day)
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filteredLists))
    }
    async clearAll(): Promise<void> {
        await AsyncStorage.removeItem(STORAGE_KEY)
    }

}

const todoListService = new TodoListService()

export async function getAllTodoLists() {
    return todoListService.getAllTodoLists()
}

export async function saveTodoList(todoList: TodoListState) {
    return todoListService.saveTodoList(todoList)
}
export async function deleteTodoList(day: string) {
    return todoListService.deleteTodoList(day)
}

export async function clearAllTodoLists() {
    return todoListService.clearAll()
} 

export async function getTodoListByDay(day: string) {
    return todoListService.getTodoListByDay(day)
}

export async function updateTodoList(todoList: TodoListState) {
    return todoListService.updateTodoList(todoList)
}
