import { FC, useCallback } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { IToDo } from '../interfaces/Todo'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { Checkbox, IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteTodo, toggleTodoStatus } from '../redux/todoSlice'

interface IToDoItemProps extends IToDo {}

export const ToDoItem: FC<IToDoItemProps> = ({ id, completed, title }) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleChangeStatus = useCallback(() => {
        dispatch(toggleTodoStatus({ completed: !completed, id }))
    }, [dispatch, completed, id])

    const handleDelete = useCallback(() => {
        dispatch(deleteTodo(id))
    }, [dispatch, id])

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
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <Checkbox edge="start" value={completed} onChange={handleChangeStatus} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ToDoItem
