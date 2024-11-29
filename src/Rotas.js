import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Header from "./provaHeader";
import Transacoes from './Transacoes';

// Define your routing component
function Rotas() {

}

// Get the root element and render the routing component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rotas />);
