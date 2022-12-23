import { FC } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { IToDo } from '../interfaces/Todo'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { toggleTodoStatus } from '../redux/todoSlice'

interface IToDoItemProps extends IToDo {}

export const ToDoItem: FC<IToDoItemProps> = ({ id, completed, title }) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleChangeStatus = () => {
        dispatch(toggleTodoStatus({ completed: !completed, id }))
    }
    return (
        <ListItem key={id}>
            <ListItemText
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {title}
            </ListItemText>
            <ListItemSecondaryAction>
                <Checkbox edge="start" value={completed} onChange={handleChangeStatus} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ToDoItem
