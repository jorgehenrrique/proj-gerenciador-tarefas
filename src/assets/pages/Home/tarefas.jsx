import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import './tarefas.css';

export default function HomeTarefas() {

  return (
    <div className="container-tarefas">
      <Breadcrumb />

      <input type="text" placeholder='Buscar...' className="buscador" />

      <div className="colunas-listas">
        <div className="lista">
          <div>
            <h1>Tarefas Listadas</h1>
            <button className='add'><img src={mais} alt="Add" /></button>
          </div>
          <section>
            <Listas />
          </section>
        </div>

        <div className="lista">
          <div>
            <h1>Tarefas Iniciadas</h1>
            <button className='add'><img src={mais} alt="Add" /></button>
          </div>
          <section>
            <Listas />
            <Listas />
            <Listas />
          </section>
        </div>

        <div className="lista">
          <div>
            <h1>Tarefas Finalizadas</h1>
            <button className='add'><img src={mais} alt="Add" /></button>
          </div>
          <section>
            <Listas />
          </section>
        </div>
      </div>
    </div>
  );
}