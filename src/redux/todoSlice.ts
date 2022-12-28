import { observable, makeAutoObservable, action } from 'mobx'
import { IToDo } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

/*const initialState: IToDo[] = [
    { id: '1', title: 'todo1', completed: false },
    { id: '2', title: 'todo2', completed: false },
    { id: '3', title: 'todo3', completed: false },
    { id: '4', title: 'todo4', completed: false },
]*/

export class todoStore {
    @observable todos: IToDo[] = []

    constructor() {
        makeAutoObservable(this)
    }

    @action
    addTodo(task: string) {
        this.todos.push({
            id: uuidv4(),
            title: task,
            completed: false,
        })
    }

    @action
    toggleTodoStatus(Todo: IToDo) {
        const index = this.todos.findIndex((todo) => todo.id === Todo.id)
        this.todos[index].completed = Todo.completed
    }

    @action
    deleteTodo(id: string) {
        this.todos.filter((todo) => todo.id !== id)
    }
}
