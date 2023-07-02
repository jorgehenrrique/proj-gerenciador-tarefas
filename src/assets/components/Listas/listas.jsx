/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import editar from './icon/editar.png';
import './listas.css';
import { useEffect, useState } from 'react';
import useFetchOptions from '../Hooks/useFetchOptions';

function AnimaOpcoes({ name, status, description, id, create, setUpdate }) {
  const [active, setActive] = useState(false);
  const { fetchData } = useFetchOptions(); // hook personalizado - de Fetch

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
    setUpdate(true);
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

export default function Listas({ name, status, description, id, create, setUpdate }) {
  // console.log(name, status, description, id, create)
  const [expand, setExpand] = useState(false);
  const [max, setMax] = useState(null);
  const [pointing, setPointing] = useState(null);

  useEffect(() => {
    expand ? setMax(2000) : setMax(60);
    expand ? setPointing('') : setPointing('...');
  }, [expand, max])

  return (
    <div className="section-lista">
      <div>
        <h2>{name}</h2>
        <span className='edit'><AnimaOpcoes
          name={name} status={status} description={description}
          create={create} id={id} setUpdate={setUpdate} /></span>
      </div>
      <p onClick={() => setExpand(!expand)}>{description.substring(0, max) + pointing}</p>
    </div>
  );
}
