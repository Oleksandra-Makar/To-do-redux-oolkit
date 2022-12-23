import List from '@material-ui/core/List'
import ToDoItem from './ToDoItem'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const ToDoList = () => {
    const todos = useSelector((state: RootState) => state.todos)

    return (
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
    )
}

export default ToDoList
