import * as React  from 'react';
import './App.css';
import App1 from './App1/App1';
import Top from './Top';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


function App(){
  return (
    <>
    <BrowserRouter>
      <div className="header-menu">
        <p>選択してください</p>
        <Link className="link-item" to="./Top">トップ</Link>
        <Link className="link-item" to="/App1/App1">App1へ</Link>
      </div>


      <Switch>
        <Route exact path="./Top"><Top/></Route> 
        <Route path="/App1/App1"><App1/></Route>
      </Switch>

    </BrowserRouter>

    </>
  )
}

export default App;