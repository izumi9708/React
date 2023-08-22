import * as React from 'react';
import {useState,createContext,useContext} from 'react';
import {useAuth} from './UseAuth';

function ContentSwitch(){
  const {isLoggedIn} = useAuth();

  return (
    <div>
      {isLoggedIn ? 'ログイン中':'ログアウト中'}
    </div>
  )
}
export default ContentSwitch;