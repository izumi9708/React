import * as React  from 'react';

import WeatherApp from './WeatherApp';
import Quiz from './Quiz';
import {quizData} from './ts/Quiz';
import ArticleIndex from './ArticleIndex';


function App2(){
  return (
    <>
      <WeatherApp/>
      <Quiz data={quizData}/>
      <ArticleIndex/>
    </>
  )
}

export default App2