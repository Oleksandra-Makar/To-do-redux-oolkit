import { FC } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { IToDo } from '../interfaces/Todo'

interface IToDoItemProps extends IToDo {}

export const ToDoItem: FC<IToDoItemProps> = ({ id, completed, title }) => {
    return (
        <ListItem key={id}>
            <ListItemText
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {title}
            </ListItemText>
        </ListItem>
    )
}

export default ToDoItem
