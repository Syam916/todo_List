import React from 'react'

import './TodoList.css'

const TodosList = (props) => {
  return (
    <div >
         {props.list.map((todo,index)=>
         <div key={index} className="list">
            <div>
                <h4 className='todo'>{todo}</h4>
            </div>
            <div>
                <button  className='button1' onClick={()=> props.click(index)}>Delete</button>
            </div>
         </div>)}
    </div>
  )
}

export default TodosList