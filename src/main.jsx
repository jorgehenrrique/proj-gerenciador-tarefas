import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VoltarInicio from './assets/components/VoltarInicio/voltarInicio.jsx';
import CadastrarTarefas from './assets/pages/Cadastrar/cadastrarTarefas.jsx';
import { MyContext } from './assets/components/Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext>
    <BrowserRouter>
      <VoltarInicio />
      <Routes>
        <Route index path='/tarefas' element={<App />} />
        <Route path='/tarefas/cadastrar' element={<CadastrarTarefas />} />
        <Route path='/tarefas/editar/:id' element={<CadastrarTarefas />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </MyContext>
)
