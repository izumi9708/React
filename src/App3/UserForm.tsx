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
  return (
    <div className="user-form-wrap wrap">
      ユーザーフォーム
      <div className="user-form-content">
        <div className="form-item">
          <p>ユーザー名</p>
          <label>
            <input type="text"/>
          </label>
        </div>
        <div className="form-item">
          <p>メールアドレス</p>
          <label>
            <input type="text"/>
          </label>
        </div>
        <div className="form-item">
          <p>パスワード</p>
          <label>
            <input type="password"/>
          </label>
        </div>
      </div>
    </div>
  )
}
export default UserForm;