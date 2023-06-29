/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import editar from './icon/editar.png';
import './listas.css';
import { useState } from 'react';
import useFetchOptions from '../Hooks/useFetchOptions';

function AnimaOpcoes({ name, status, description, id, create }) {
  const [active, setActive] = useState(false);
  const { fetchData } = useFetchOptions();

  function changeType(tipo, id) {
    console.log(tipo, id);
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: `${tipo}` })
    }
    const url = `http://localhost:3000/task/${id}`;
    fetchData(url, options);
  }

  return (
    <nav className={`nav-14 ${active ? 'active' : ''}`}>
      <ul>
        {status === 'LISTADA' ? (<>
          <li><NavLink state={{ name, status, description, id, create }} to={`/tarefas/editar/${id}`}>Editar</NavLink></li>
          <li><NavLink onClick={() => changeType('INICIADA', id)}>Iniciar</NavLink></li>
          <li><NavLink onClick={() => changeType('FINALIZADA', id)}>Finalizar</NavLink></li>
        </>) : null}
        {status === 'INICIADA' ? (<>
          <li><NavLink state={{ name, status, description, id, create }} to={`/tarefas/editar/${id}`}>Editar</NavLink></li>
          <li><NavLink onClick={() => changeType('LISTADA', id)}>Listar</NavLink></li>
          <li><NavLink onClick={() => changeType('FINALIZADA', id)}>Finalizar</NavLink></li>
        </>) : null}
        {status === 'FINALIZADA' ? (<>
          <li><NavLink state={{ name, status, description, id, create }} to={`/tarefas/editar/${id}`}>Editar</NavLink></li>
          <li><NavLink onClick={() => changeType('LISTADA', id)}>Listar</NavLink></li>
          <li><NavLink onClick={() => changeType('INICIADA', id)}>Iniciar</NavLink></li>
        </>) : null}
        {/* <li><NavLink state={{ name, status, description, id, create }} to={`/tarefas/editar/${id}`}>Editar</NavLink></li>
        <li><NavLink to='/tarefas/cadastrar'>Iniciar</NavLink></li>
        <li><NavLink to='/tarefas/cadastrar'>Finalizar</NavLink></li> */}
      </ul>
      <button onClick={() => setActive(!active)}>
        <img src={editar} alt="Opções" />
      </button>
    </nav>
  );
}

export default function Listas({ name, status, description, id, create }) {
  // console.log(name, status, description, id, create)

  return (
    <div className="section-lista">
      <div>
        <h2>{name}</h2>
        <span className='edit'><AnimaOpcoes
          name={name} status={status} description={description}
          create={create} id={id} /></span>
      </div>
      <p>{description.substring(0, 60) + "..."}</p>
    </div>
  );
}
