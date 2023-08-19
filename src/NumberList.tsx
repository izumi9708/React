import * as React from 'react';
import {useState,useEffect} from 'react';
import './css/NumberList.css';

// 数字のリストを表示するReactコンポーネントを作成してください。
// 要件：
// コンポーネント名は「NumberList」とします。
// プロパティとして「numbers」という数値の配列を受け取ります。
// 「NumberList」コンポーネントは、受け取った「numbers」配列の要素ごとに、リストアイテムを表示します。
// 各リストアイテムには、対応する数値が表示されます。

type Props = {
  numbers:number[]
}

function NumberList(props:Props){
  console.log(props)
  return (
    <div className="number-list">
      ナンバーリスト
      {props.numbers.map(list => {
        return (
          <div className="numbers-wrap">
            <div>{list}</div>
          </div>
        )
      })}
    </div>
  )
}

export default NumberList;