import React, { useState, useContext } from 'react';
import './App.css';

import { ContextStore } from './store/index'

import Header from './components/Header'
import MainSection from './components/MainSection'

function App() {
  const allData = useContext(ContextStore);
  console.log('const allData = useContext(ContextStore) //', allData, '可選擇在此處將api資料帶入ContextStore帶入下一層')
  const [test, setTest] = useState(0)
  return (
    <ContextStore.Provider value={{ ...allData, test, setTest }}> {/* 把store && app的useState("test") 一起傳下去 在不想把app state傳回store時使用 */}
      <div className="App">
        <Header title="React Hooks" />
        <MainSection defaultCount={5} />
      </div>
    </ContextStore.Provider>
  );
}

export default App;
