import React, { useState } from 'react'
import TodosList from './todos/TodosList'

import './App.css'

const App = () => {

  const [task,setTask]=useState('')

  const [todos,setTodos]=useState([])
  const changeHandler=(e)=>{
    setTask(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    if (task.length>1){
      const newtodos=[...todos,task]
      setTodos(newtodos)
      setTask('')
      console.log(todos);

    }
    
  }
  
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=> index!==indexValue)
    setTodos(newTodos)
  }

  return (
    <center>
      <div className='main'>
        <div className='container'>
          <div className='head'S>
            <h4  >ToDo Management List</h4>
          </div>
          <form className='form' onSubmit={submitHandler}>
            <input type="text" value={task} className='input1' onChange={changeHandler}/>&nbsp;&nbsp;
            <input className='button' type="submit" value="Add" />
          </form>
          <TodosList list={todos} click={deleteHandler}/>

        </div>
        
      </div>
    </center>
  )
}

export default App
