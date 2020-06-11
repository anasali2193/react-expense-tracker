import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpress} from './components/IncomeExpress';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider className="App"> 
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpress/>
        <TransactionList/>
        <AddTransaction/>
      </div>
        
    </GlobalProvider>
  );
}

export default App;
