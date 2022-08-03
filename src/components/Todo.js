import React, {useState} from 'react'
import TodoForm from "./TodoForm"

function Todo() {
    const [edit, setEdit] = useState({
        id: null.,
        value: ''
    })

  return (
    <div className={Todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}>

        <div key={Todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className="icons">

        </div>

    </div>
  )
}

export default Todo