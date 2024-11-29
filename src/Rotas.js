import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Transacoes from './Transacoes'

function Rotas() {
    return (
<BrowserRouter>
<Routes>
<Route path="/" element={<App />}/> 
<Route index element={<App />} />
<Route path="/home" element={<App />}></Route>
<Route path="/transacoes" element={<Transacoes/>}></Route>
</Routes>
</BrowserRouter>
    )}
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);