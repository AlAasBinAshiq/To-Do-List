import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "12px auto"
  }
  return (
      <div className='container' style={myStyle}>
        <h3 className="my-3">{props.title}</h3>
        {props.todos.length===0? <p className="text-center">No list Available </p> :
        props.todos.map((todo)=>{
            return
               <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
           
        })
    }
        
      </div>
  )
}
