import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    //Add todo
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

    const newTodos = [todo, ...todos]

    setTodos(newTodos);
    //console.log(...todos);
    };

        //Edit todo
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };

    //Remove from list
    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr);
    };

    //Hover if complete (toggle)
    const completeTodo = id => {
      let updateTodos = todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo
      });
      setTodos(updateTodos);
    };

  return (
    <div>
        <h1>What's the plan today?</h1>
        
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList