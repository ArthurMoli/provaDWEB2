import Link from 'react-router-dom'
import './Header.css';
import App from './App';

function Header() {
  return (
    <div className="header">
        <h1 className="MyFinance">MyFinance</h1>
        <ul>
            <li><a>Home</a></li>
            <li><a>Transações</a></li>
        </ul>
    </div>

  );
}

export default Header;
