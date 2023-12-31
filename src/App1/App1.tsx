import * as React           from 'react';
import CountDownTimer       from './CountDownTimer';
import ToggleSwitch         from './ToggleSwitch';
import {numbers}            from './ts/NumberList';
import ColorPicker          from './ColorPicker';
import FilteredList         from './FilteredList';
import {emailList}          from './ts/FilteredList';
import ShoppingCart         from './ShoppingCart';
import {productsData}       from './ts/ShoppingCart';
import SearchAccount        from './SearchGithubAccount';

function App1(){

  return (
    <>
      <CountDownTimer/>
      <ToggleSwitch/>
      <ColorPicker/>
      <FilteredList list={emailList}/>
      <ShoppingCart products={productsData}/>
      <SearchAccount/>
    </>
  )
}

export default App1;