import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './assets/components/VoltarInicio/voltarInicio.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Logo />
    <Routes>
      <Route>
        <Route index path='/' element={<App />} />


        <Route path='*' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
