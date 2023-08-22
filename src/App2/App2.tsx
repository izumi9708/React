import * as React  from 'react';
import {useState,useEffect,createContext} from 'react';


import WeatherApp from './WeatherApp';
import Quiz from './Quiz';
import {quizData} from './ts/Quiz';
import ArticleIndex from './ArticleIndex';
import SearchAnime from './SearchAnime';
import UseAuth from './UseAuth';

export const AppContext = createContext({});

function App2(){
  const [testState,setState] = useState('test');


  return (
    <>
      <AppContext.Provider value={{testState,setState}}>
      <WeatherApp/>
      <Quiz data={quizData}/>
      <ArticleIndex/>
      <SearchAnime/>
      {/* <UseAuth/> */}
      </AppContext.Provider>
    </>
  )
}

export default App2