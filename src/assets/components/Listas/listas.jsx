/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import editar from './icon/editar.png';
import './listas.css';

export default function Listas({ name, status, description, id, create }) {
  // console.log(name, status, description, id, create)

  function navegarEditTafera() {
    <NavLink to='./16-drink-water'>Drink Water</NavLink>
  }

  return (
    <div className="section-lista">
      <div>
        <h2>{name}</h2>
        <button className='edit' onClick={() => navegarEditTafera(id)}>
          <img src={editar} alt="Editar" /></button>
      </div>
      <p>{description.substring(0, 60) + "..."}</p>
    </div>
  );
}
