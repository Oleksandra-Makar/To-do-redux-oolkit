import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ToDoItem from './ToDoItem'
import { IToDo } from '../interfaces/Todo'

const ToDoList = () => {
    const [todoDescription, setTodoDescription] = useState('')

    const todos: IToDo[] = [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ]
    return (
        <>
            <Typography style={{ textAlign: 'center' }} variant="h3">
                Redux List App
            </Typography>
            <List>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                ))}
            </List>
        </>
    )
}

export default ToDoList
