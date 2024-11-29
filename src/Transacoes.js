import React from 'react';
import './App.css';
import Header from './provaHeader'
import Footer from './Footer';
function Transacoes() {
  return (
    <div className="App">
      <Header/>
      <h1 className='homeTxt'>Home</h1>
        <ul className='financas'>
          <li><h2 className='h2Financas'>Testando</h2></li>
          <li><h2 className='h2Financas'>Testando</h2></li>
          <li><h2 className='h2Financas'>Testando</h2></li>
        </ul>
      <Footer/>
    </div>
  );
}

export default Transacoes;