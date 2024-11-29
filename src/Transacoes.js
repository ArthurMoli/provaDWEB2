import React from 'react';
import './Tabela.css';
import Header from './provaHeader'
import Footer from './Footer';
import Tabela from './Tabela';
function Transacoes() {
  return (
    <div className="App">
      <Header/>
      <h1 className='tranTxt'>Transações</h1>
      <Tabela/>
      <Footer/>
    </div>
  );
}

export default Transacoes;