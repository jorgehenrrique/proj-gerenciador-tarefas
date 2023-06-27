import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './assets/components/VoltarInicio/voltarInicio.jsx';
import EditarTarefas from './assets/page/Editar/editarTarefas.jsx';
import CadastrarTarefas from './assets/page/Cadastrar/cadastrarTarefas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Logo />
    <Routes>
      <Route>
        <Route index path='/' element={<App />} />
        <Route path='./assets/page/Editar/editarTarefas' element={<EditarTarefas />} />
        <Route path='./assets/page/Cadastrar/cadastrarTarefas' element={<CadastrarTarefas />} />

        <Route path='*' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
