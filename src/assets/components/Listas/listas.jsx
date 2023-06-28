/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import editar from './icon/editar.png';
import './listas.css';
import { useState } from 'react';

function AnimaOpcoes({ id }) {
  const [active, setActive] = useState(false);

  return (
    <nav className={`nav-14 ${active ? 'active' : ''}`}>
      <ul>
        <li><NavLink to={`/tarefas/editar/${id}`}>Editar</NavLink></li>
        <li><NavLink to='/tarefas/cadastrar'>Iniciar</NavLink></li>
        <li><NavLink to='/tarefas/cadastrar'>Finalizar</NavLink></li>
      </ul>
      <button onClick={() => setActive(!active)}>
        <img src={editar} alt="Editar" />
      </button>
    </nav>
  );
}

export default function Listas({ name, status, description, id, create }) {
  // console.log(name, status, description, id, create)

  function navegarEditTafera() {
    <NavLink to='./16-drink-water'>Drink Water</NavLink>
  }

  return (
    <div className="section-lista">
      <div>
        <h2>{name}</h2>
        <button className='edit' onClick={() => navegarEditTafera(id)}><AnimaOpcoes id={id} /></button>
      </div>
      <p>{description.substring(0, 60) + "..."}</p>
    </div>
  );
}
{/* <img src={editar} alt="Editar" /> */ }