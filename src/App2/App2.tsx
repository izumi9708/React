import * as React  from 'react';

import WeatherApp from './WeatherApp';
import Quiz from './Quiz';
import {quizData} from './ts/Quiz';


function App2(){
  return (
    <>
      <WeatherApp/>
      <Quiz data={quizData}/>
    </>
  )
}

export default App2