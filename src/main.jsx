import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './assets/components/VoltarInicio/voltarInicio.jsx';
import EditarTarefas from './assets/pages/Editar/editarTarefas.jsx';
import CadastrarTarefas from './assets/pages/Cadastrar/cadastrarTarefas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Logo />
    <Routes>
      <Route index path='/tarefas' element={<App />} />
      <Route path='/tarefas/cadastrarTarefas' element={<CadastrarTarefas />} />
      <Route path='/tarefas/editarTarefas' element={<EditarTarefas />} />
      {/* <Route path='/tarefas/:id' element={<EditarTarefas />} /> */}
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
