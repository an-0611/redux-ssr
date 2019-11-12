import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import SubSection from './SubSection'
import { ContextStore } from '../store/index'

export default function MainSection(props) {
  const { defaultCount } = props;
  const [count, addCount] = useState(defaultCount); // defaultCount 會等於 count 的初始值
  const [clickCount, calcClick ] = useState(0);
  const { todos, test } = useContext(ContextStore); // 取用ContextAPI的值，相當於redux中connect(mapStateToProps)取reducer
  console.log('const { todos, test } = useContext(ContextStore) //', 'todos: ' +  todos + 'test: ' + test)
  console.log('<MainSection>可取的資料變成ContextStore + app的state')

  const add10Count = () => {
    addCount(count + 10)
    calcClick(clickCount + 10)
  }
  const minus = () => {
    addCount(count - 1)
    calcClick(clickCount - 1)
  }
  useEffect(() => {
    // useEffect 在每次渲染都會執行一次，並替換useEffect內部的function並執行 
    // 等同於componentDidMount、componentDidUpdate
    document.title = `${clickCount}則新的通知` 
  })
  useEffect(() => {
    if (count > 0 && clickCount > 0) { // 不使用[]限定只執行一次後就可以帶入count clickCount 作判斷比較
      const timer = setInterval(minus, 100);
      return () => {
        clearInterval(timer);
      }
    }
  }); // }, []);
  // 在class components，state更新時會剎發compomentDidUpdate判斷此次state與更新過的state是否一致，
  // 如果一致就只會執行一次，相當於componentDidMount 做了一次。
  // 這邊用 [] 則只會更新一次(因為修改的是count && clickCount, 而這一次的空陣列也會等於下一次的空陣列)
  return (
    <div className="mainSection">
      <div>{`已有: ${defaultCount}則訊息, hook 更新後為 ${count}`}</div>
      <button
        style={{ 'margin': '20px' }}
        onClick={
          () => {
            addCount(count + 1);
            calcClick(clickCount + 1);
          }
        }
      >新增1則訊息
      </button>
      <button style={{ 'margin': '20px'}}
        onClick={
          () => {
            add10Count();
          }
        }
      >新增10則訊息
      </button>
      <div>{`發送了 ${clickCount} 則通知`}</div>
      {/*  */}
      <ContextStore.Provider value={{ todos: [1,2,3,4,5] }}> {/* 這邊可以選擇有用到的資料傳給<SubSection />即可,需先從上方useContext帶入value 或直接在 SubSection />引入ContextStore取值 */}
        <SubSection />
      </ContextStore.Provider>
    </div>
  );
}

MainSection.propTypes = {
  defaultCount: PropTypes.number,
};
