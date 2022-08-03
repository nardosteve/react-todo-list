//command: rfce
import React, {useState} from 'react'

function TodoForm(props) {
//Use state
const [input, setInput] = useState('')

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
        <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}      
        />
    <button className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm