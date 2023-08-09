import * as React from 'react';
import {useState,useEffect} from 'react';
import UserForm from './UserForm';
import NumberCounter from './NumberCounter';
import CountDownTimer from './CountDownTimer';
import ToggleSwitch from './ToggleSwitch';
import NumberList from './NumberList';
import {numbers} from './ts/NumberList';
import ColorPicker from './ColorPicker';
import FilteredList from './FilteredList';
import {emailList} from './ts/FilteredList';

function App(){
  // useEffect(() => {
  //   fetch('https://api.github.com/users/izumi9708')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // })

  return (
    <>
      <UserForm/>
      <NumberCounter/>
      <CountDownTimer/>
      <ToggleSwitch/>
      <NumberList numbers={numbers}/>
      <ColorPicker/>
      <FilteredList list={emailList}/>
    </>
  )
}

export default App;