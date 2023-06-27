/* eslint-disable no-unused-vars */
import editar from './icon/editar.png';
import './listas.css';

export default function Listas(props) {


  return (
    <div className="section-lista">
      <div>
        <h2>titulo</h2>
        <button className='edit'><img src={editar} alt="Editar" /></button>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dolor in soluta ipsum sequi debitis! Fugiat molestiae atque laboriosam!</p>
    </div>
  );
}