import * as React from 'react';
import {useState,useEffect} from 'react';
import './css/CountDownTimer.css';

// 以下の要件を満たす「カウントダウンタイマー」コンポーネントを作成してください。
// 要件：
// コンポーネント名は「CountdownTimer」とします。
// タイマーの初期値として、カウントダウンする時間を秒単位で受け取ります。
// カウントダウンタイマーは、指定された時間からカウントダウンを開始し、0になるまで進めます。
// カウントダウン中は、残りの時間を表示します。
// タイマーが0になったら、「タイムアップ！」などのメッセージを表示します。
// タイマーのカウントダウンは1秒ごとに減少します。
// カウントダウンが完了したら、タイマーを停止して再びカウントダウンできるようにリセットボタンを表示します。

function CountDownTimer(){
  const [timer,setTimer] = useState<number>();
  const [timerStart,setTimerStart] = useState<boolean>(false);

  const countStart = (event) => {
    const input = event.target.closest('.count-down-timer').querySelector('input');

    if(!timerStart){
      if(isNaN(input.value) || input.value == ''){
        alert('数字を入力してください\n数字は半角数字で入力してください');
      }else {
        setTimerStart(!timerStart);
        setTimer(Number(input.value))
      }

    } else {
      setTimerStart(!timerStart);
    }

  }

  useEffect(() => {
    if(timerStart){
      if(timer > 0){
        setTimeout(() => {
          setTimer(timer - 1)
          console.log('aaa')
        },1000)
      }
    }
  },[timer])


  return (
    <div className="count-down-timer">
    カウントダウンタイマー
   {timerStart ? 
      <p>
        {timer > 0 ? timer : 'タイムアップ'}
      </p>
    :
      <input type="text"/>
    }
    
      <button type="button" className="count-down-btn" onClick={countStart}>{timerStart ? 'リセット' : 'スタート！'}</button>
    </div>
  )
}

export default CountDownTimer;