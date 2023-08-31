import * as React  from 'react';
import {useState,useEffect,useMemo} from 'react';
import './css/UserForm.css';

// 以下の要件に従って、Reactコンポーネントを実装してください。
// ユーザー登録フォームを作成します。フォームには以下のフィールドが含まれます。
// ユーザー名（必須、3文字以上）
// メールアドレス（必須、正しい形式）
// パスワード（必須、6文字以上）
// フォームの各フィールドはユーザーの入力に対してバリデーションを行います。バリデーションに問題がある場合、エラーメッセージを表示します。
// フォームが送信されたとき、フォームの内容をコンソールにログ出力します。
// ユーザーが入力した値をフォームの送信後にクリアします。

function UserForm(){

  type DisplayPass  = (event:React.MouseEvent<HTMLSpanElement>) => void;
  const displayPass:DisplayPass = (event) => {
    const {target} = event;
    const open  = document.querySelector('.open');
    const close = document.querySelector('.close');
    const input = (event.target as HTMLElement).closest('label').querySelector('input');
    input.type === 'password' ? input.type = 'text' : input.type = 'password';

    if((target as HTMLElement).classList.contains('open')){
      (target as HTMLElement).style.display = 'none';
      (close as HTMLElement).style.display = 'block';

    }else {
      (target as HTMLElement).style.display = 'none';
      (open as HTMLElement).style.display = 'block';
    }

  }

  const sendForm = () => {
    const name = document.querySelector('input[name="name"]') as HTMLInputElement;
    const mail = document.querySelector('input[name="mail"]') as HTMLInputElement;
    const pass = document.querySelector('input[name="pass"]') as HTMLInputElement;

    let errCount = 0;

    if(name.value == ''){
      const err    = name.closest('div').querySelector('.err');
      const errMsg = document.createElement('span');
      errMsg.classList.add('err')
      errMsg.textContent = '入力してください';

      if(!err)name.closest('div').appendChild(errMsg);
      errCount++;
    }

    if(name.value == ''){
      const err    = name.closest('div').querySelector('.err');
      const errMsg = document.createElement('span');
      errMsg.classList.add('err')
      errMsg.textContent = '入力してください';

      if(!err)name.closest('div').appendChild(errMsg);
      errCount++;
    }

    if(name.value == ''){
      const err    = name.closest('div').querySelector('.err');
      const errMsg = document.createElement('span');
      errMsg.classList.add('err')
      errMsg.textContent = '入力してください';

      if(!err)name.closest('div').appendChild(errMsg);
      errCount++;
    }
  }

  return (
    <div className="user-form-wrap wrap">
      ユーザーフォーム（作成中）
      <div className="user-form-content">
        <div className="form-item">
          <p>ユーザー名</p>
          <label>
            <input type="text" placeholder="例）山田太郎" name="name"/>
          </label>
        </div>
        <div className="form-item">
          <p>メールアドレス</p>
          <label>
            <input type="text" placeholder="例）xxxx@xxx.com" name="mail"/>
          </label>
        </div>
        <div className="form-item">
          <p>パスワード</p>
          <label>
            <input type="password" placeholder="半角英数字" name="pass"/>
            <span 
              className="material-symbols-outlined close"
              onClick={displayPass}
            >
              visibility
            </span>
            <span 
              className="material-symbols-outlined open"
              onClick={displayPass}
            >
              visibility_off
            </span>       
          </label>
        </div>

        <div className="form-btn-wrap">
          <button type="button" className="form-btn"
            onClick={sendForm}
          >確認</button>  
        </div> 
      </div>
    </div>
  )
}
export default UserForm;