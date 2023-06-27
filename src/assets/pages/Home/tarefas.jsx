import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import './tarefas.css';

export default function HomeTarefas() {

  return (
    <div className="container-tarefas">
      <Breadcrumb />

      <input type="text" placeholder='Buscar...' className="buscador" />

      <div className="colunas-listas">
        <div className="lista">
          <h1>Tarefas Listadas</h1>
          <section>
            <Listas />
          </section>
        </div>

        <div className="lista">
          <h1>Tarefas Iniciadas</h1>
          <section>
            <Listas />
            <Listas />
            <Listas />
            <Listas />
          </section>
        </div>

        <div className="lista">
          <h1>Tarefas Finalizadas</h1>
          <section>
            <Listas />
          </section>
        </div>
      </div>
    </div>
  );
}