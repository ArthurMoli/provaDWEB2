import  {Link}  from 'react-router-dom';
import {Outlet}  from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
    <div className="header">
        <h1 className="MyFinance">MyFinance</h1>
        <ul>
            <li> <Link to="/home">Home</Link></li>
            <li><li> <Link to="/transacoes">Transações</Link></li></li>
        </ul>
    </div>
    <Outlet/>
    </>
  );
}

export default Header;
