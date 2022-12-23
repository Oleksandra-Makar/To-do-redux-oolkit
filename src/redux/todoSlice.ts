import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToDo } from '../interfaces/Todo'

const initialState: IToDo[] = [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: false },
    { id: 4, title: 'todo4', completed: false },
]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }: PayloadAction<string>) => {
            const newTodo = {
                id: Date.now(),
                title: payload,
                completed: false,
            }
            state.push(newTodo)
        },
        toggleTodoStatus: (state, { payload }: PayloadAction<Omit<IToDo, 'title'>>) => {
            const index = state.findIndex((todo) => todo.id === payload.id)

            state[index].completed = payload.completed
        },
    },
})

export const { addTodo, toggleTodoStatus } = todoSlice.actions
export default todoSlice.reducer
