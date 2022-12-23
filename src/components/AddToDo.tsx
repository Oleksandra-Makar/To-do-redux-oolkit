import TextField from '@material-ui/core/TextField'
import { useCallback, useState } from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { AppDispatch } from '../redux/store'

const AddToDo = () => {
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = useCallback(
        (event: any) => {
            event.preventDefault()
            dispatch(addTodo(title))
        },
        [title, dispatch]
    )
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="To Do Item"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default AddToDo
