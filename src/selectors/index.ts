import { RootState } from '../redux/store'

export const todosSelector = (state: RootState) => state.todos

export const completedTodosSelector = (state: RootState) =>
    state.todos.filter((todo) => todo.completed === true).length
