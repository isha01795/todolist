import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import todoimg from '../todo.jpg';

const getLocalData = () => {
  let list = localStorage.getItem("list");
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
    return[];
  }
}

function TodoList() {
  const [todos, setTodos] = useState(getLocalData());

  const addTodo = todo => {
    if (!todo.text) {
      alert("Add a Todo first.");

      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  };

  const removeAll = () => {
  if (  todos.length===0){
         alert("Add a Todo first.")
  }
  else{
    if(!window.confirm('Are you sure to delete all Todos?')){
      return;
    }
    else{
      setTodos([]);
      localStorage.removeItem("list");

    }
   }
  }

useEffect(() => {
    localStorage.setItem('list',JSON.stringify( todos))
}, [todos])

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text ) {
      alert("Add a Todo first.");

      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

 

  return (
    <>
    <div className="header">
      <h1>Here's Your Todo List!</h1>
      <span> <img src={todoimg} alt="" /></span>
      </div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
       <div>
        <button className="remove_button" onClick={removeAll}>
        {todos.length === 0 ? "Add Your First Todo" :  "  Remove All"}
      
        </button>
      </div>
    </>
  );
}

export default TodoList;