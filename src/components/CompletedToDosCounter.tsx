import Typography from '@material-ui/core/Typography'
import { completedTodosSelector } from '../selectors'
import { useSelector } from 'react-redux'

export const CompletedToDosCounter = () => {
    const totalCompletedTodos = useSelector(completedTodosSelector)

    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {totalCompletedTodos}
        </Typography>
    )
}

export default CompletedToDosCounter
