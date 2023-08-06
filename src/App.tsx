import * as React from 'react';
import {useState,useEffect} from 'react';
import TodoList from './TodoList';
import {todos} from './ts/todos';
import UserForm from './UserForm';
import NumberCounter from './NumberCounter';
import CountDownTimer from './CountDownTimer';
import ToggleSwitch from './ToggleSwitch';
import NumberList from './NumberList';
import {numbers} from './ts/NumberList';

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
      <NumberList numbers={numbers}/>
    </>
  )
}

export default App;