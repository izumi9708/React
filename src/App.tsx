import * as React from 'react';
import {useState,useEffect} from 'react';
import TodoList from './TodoList';
import {todos} from './ts/todos';
import UserForm from './UserForm';
import NumberCounter from './NumberCounter';
import CountDownTimer from './CountDownTimer';
import ToggleSwitch from './ToggleSwitch';

function App(){
  // useEffect(() => {
  //   fetch('https://api.github.com/users/izumi9708')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // })

  return (
    <>
      <TodoList todos={todos}/>
      <UserForm/>
      <NumberCounter/>
      <CountDownTimer/>
      <ToggleSwitch/>
    </>
  )
}

export default App;