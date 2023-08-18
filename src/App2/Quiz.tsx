import * as React from 'react';
import {useState,useEffect,useMemo} from 'react';

import './css/Quiz.css';

// 問題: クイズアプリケーション
// ReactとTypescriptを使用して、クイズアプリケーションを作成してください。このアプリケーションには、以下
// の機能が含まれる必要があります。
// クイズの表示: クイズの質問と選択肢が表示されるようにしてください。ユーザーは選択肢から正解を選ぶことができます。
// 正解判定: ユーザーが選択肢を選んだ後、正解かどうかを表示してください。
// 次の質問へ: 正解判定が表示された後、次のクイズの質問と選択肢を表示してください。
// 最終結果: クイズが終了したら、ユーザーの正解数と全体の質問数を表示してください。

function Quiz(props){
  const [data,setData] = useState(props.data);
  const [result,setResult] = useState([]);
  const [countQuestion,setCountQuestion] = useState(0);

  const selectAnswer = (e,index) => {
    const answer = e.target.closest('label').textContent;
    
    if(data[index].correctAnswer == answer){
      setResult([...result,'正解'])

    }else {
      setResult([...result,'不正解'])
    }

    scroll();
    setCountQuestion(index + 1);    
  }

  const scroll = () => {
    const content = document.querySelector('.quiz');
    const currentSlide = content.scrollLeft;

    content.scroll({left:currentSlide + 500,behavior:'smooth'});
  }

  const reStart = () => {
    setCountQuestion(0);
    setResult([]);
  }

  const correct = result.filter(val => val === '正解');
  
  if(data.length === countQuestion){
    const content = document.querySelector('.quiz');

    content.scroll({left:0});
  }
  
  return (
    <div className="quiz-wrap wrap">
      クイズアプリケーション
      {data.length === countQuestion
      ? 
        (<div className="result">
            <div>
              <span>{data.length}</span>問中<span>{correct.length}</span>問正解です！<br/>
            </div>
            <p>お疲れ様でした</p>
            <button type="button" className="result-btn" onClick={reStart}>リスタート</button>
        </div>)
      :
        (<div className="quiz">
          <div className="quiz-content"
            style={{width:data.length * 500}}
          >
            {data.map((elem,index) => {
              return (
                <div className="quiz-item" key={index}>
                  <p>第{index + 1}問</p>
                  <p>{elem.question}</p>
                  {elem.options.map((elem_c,index_c) => {
                    return (
                      <label key={index_c}>
                        <input name={`option_${index}`} type="radio"
                              onChange={(e) => selectAnswer(e,index)}
                        />{elem_c}
                      </label>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>)
      }
      
    </div>
  )
}

export default Quiz;