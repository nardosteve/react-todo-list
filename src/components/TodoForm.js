//command: rfce
import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
//Use state
const [input, setInput] = useState(props.edit ? props.edit.value : '')

const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
};

//Add some functions to prevent refreshing on button click
const handleSubmit = e => {
    e.preventDefault();

    //generate new number
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
};


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input
          type='text'
          placeholder='Update your item'
          value={input}
          name='text'
          className='todo-input edit'
          onChange={handleChange}
          ref={inputRef}      
        />
    <button className="todo-button edit">Update</button>
       </>
      //  else
    ) : (
      <>
        <input
          type='text'
          placeholder='Add a todo'
          value={input}
          name='text'
          className='todo-input'
          onChange={handleChange}
          ref={inputRef}      
        />
    <button className="todo-button">Add Todo</button>
    </>
    )}
    
    </form>
  )
}

export default TodoForm