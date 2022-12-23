import React from 'react'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

function App() {
    return (
        <Container maxWidth="xs">
            <Typography style={{ textAlign: 'center' }} variant="h3">
                Redux List App
            </Typography>
            <AddToDo />
            <ToDoList />
        </Container>
    )
}

export default App
