import React from 'react'
import ToDoList from './components/ToDoList'
import AddToDo from "./components/AddToDo";
import Container from "@material-ui/core/Container";

function App() {
    return (
      <Container maxWidth="xs">
          <AddToDo/>
          <ToDoList />

      </Container>
)

}

export default App
