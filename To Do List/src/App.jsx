import { useState } from 'react'
import './App.css'

import InputContainer from './components/InputContainer'
import ItemContainer from './components/ItemContainer'
import Count from './components/Count'

function App() {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodos) =>{
    setTodos([...todos, newTodos])
  }

  const deleteTodo = (itemToBeDeleted) =>{
    const filteredTodo = todos.filter((item) => item !== itemToBeDeleted);
    setTodos(filteredTodo);
  }

  return (
    <div className='App'>
      <h1>My ToDo</h1>
      <Count itemCount={todos.length}/>
      <InputContainer addNewTodo={addNewTodo}/>
      <ItemContainer todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;