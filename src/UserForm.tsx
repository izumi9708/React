import * as React from 'react';
import {useState,useEffect} from 'react';
import './css/UserForm.css';

// ReactとTypeScriptを使用して、以下の要件を満たす「ユーザーフォーム」コンポーネントを作成してください。
// 要件：
// コンポーネント名は「UserForm」とします。
// ユーザー情報として「名前」と「年齢」の2つの入力フィールドを持ちます。
// 各入力フィールドは、ラベルとテキストボックスからなる形式で表示します。
// 入力フィールドには適切な型の値を設定してください（名前は文字列、年齢は数値）。
// フォームが送信されると、入力されたユーザー情報をコンソールに表示してください。
// ユーザー情報の送信は、フォームの「送信」ボタンがクリックされたときに行われます。
// ユーザー情報は、フォームが送信された後にクリアされるようにしてください。


function UserForm(){
  const [name,setName] = useState('');
  const [age, setAge] = useState('');

  type SubmitForm  = (e:React.MouseEvent<HTMLButtonElement>) => void; 
  const submitForm:SubmitForm = (e) => {
    const nameInput = (e.target as HTMLButtonElement).closest('div').querySelector('input[name="name"]');
    const ageInput  = (e.target as HTMLButtonElement).closest('div').querySelector('input[name="age"]');


    console.log('名前：',name);
    console.log('年齢:',age);

    (nameInput as HTMLInputElement).value = '';
    (ageInput as HTMLInputElement).value = '';
  }

  return (
    <div className="user-form-wrap"  style={{marginTop:'20px'}}>
      ユーザーフォーム
      <label>名前：<input name="name" type="text" onChange={(e) => setName(e.target.value)} /></label>
      <label>年齢：<input name="age" type="text" onChange={(e) => setAge(e.target.value)}/></label>
      <button onClick={(e) => submitForm(e)} type="button">送信</button>
    </div>
  )
}

export default UserForm;