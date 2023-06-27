import './assets/styles/reset.css';
import './App.css';
import HomeTarefas from './assets/page/Home/tarefas';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <HomeTarefas />
      <NavLink className='item' to='./assets/page/Editar/editarTarefas'>Editar</NavLink>
      <NavLink className='item' to='./assets/page/Cadastrar/cadastrarTarefas'>Cadastrar</NavLink>

    </>
  )
}

export default App;
