import * as React from 'react';
import {useState,useEffect} from 'react';
import TodoList from './TodoList';
import {todos} from './todos';

function App(){
  // useEffect(() => {
  //   fetch('https://api.github.com/users/izumi9708')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // })

  return (
    <>
      <TodoList todos={todos}/>
    </>
  )
}

export default App;