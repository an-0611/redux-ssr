import React, { useContext } from 'react'
import { ContextStore } from '../store/index'

// ContextStore.Provider會被最近一層的ContextStore.Provider所提供的值給覆蓋
export default function SubSection() {
  const data = useContext(ContextStore);
  // console.log(data);
  console.log('由於上一層被ContextStore又被賦值，資料變成上一層Provider的值。 // data = {todos: Array(5)}')
  console.log('如果上一層沒有提供Provider，則資料還是原本的值。 // data = {todos: Array(3), test: 0} ')
  return (
    <div className="mainSection">
      {
        data.todos.map(item=> <span key={item}>{item}</span>)
      }
    </div>
  );
}
