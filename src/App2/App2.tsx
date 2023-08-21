import * as React  from 'react';

import WeatherApp from './WeatherApp';
import Quiz from './Quiz';
import {quizData} from './ts/Quiz';
import ArticleIndex from './ArticleIndex';
import SearchAnime from './SearchAnime';


function App2(){
  return (
    <>
      <WeatherApp/>
      <Quiz data={quizData}/>
      <ArticleIndex/>
      <SearchAnime/>
    </>
  )
}

export default App2