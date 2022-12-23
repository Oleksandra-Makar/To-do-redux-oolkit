import React from 'react'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'
import CompletedToDosCounter from './components/CompletedToDosCounter'
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
            <CompletedToDosCounter />
        </Container>
    )
}

export default App
