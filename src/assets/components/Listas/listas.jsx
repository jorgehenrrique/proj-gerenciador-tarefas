/* eslint-disable react/prop-types */
import editar from './icon/editar.png';
import './listas.css';

export default function Listas({ name, status, description, id, create }) {
  console.log(name, status, description, id, create)

  return (
    <div className="section-lista">
      <div>
        <h2>{name}</h2>
        <button className='edit'><img src={editar} alt="Editar" /></button>
      </div>
      <p>{description.substring(0, 60) + "..."}</p>
    </div>
  );
}
