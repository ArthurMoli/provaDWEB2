import React from 'react';
import './App.css';
import Header from './provaHeader'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      
      <Header/>
      <h1 className='homeTxt'>Home</h1>
        <ul className='financas'>
          <li><h2 className='h2Financas'>Total Entradas: R$6.200,00</h2></li>
          <li><h2 className='h2Financas'>Total Saídas: R$2.210,00</h2></li>
          <li><h2 className='h2Financas'>Saldo Atual: R$4.990,00</h2></li>
        </ul>
      <Footer/>
    </div>
  );
}

export default App;
