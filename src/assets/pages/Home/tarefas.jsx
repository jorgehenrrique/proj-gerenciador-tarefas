import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import './spinner.css';
import './tarefas.css';
import useFetch from '../../components/Hooks/useFetch';

export default function HomeTarefas() {

  const [data] = useFetch('http://localhost:3000/task');


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
            {data && (
              data.map(item => {
                if (item.status === 'LISTADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })
            )}
          </section>
        </div>

        <div className="lista">
          <div>
            <h1>Tarefas Iniciadas</h1>
            <button className='add'><img src={mais} alt="Add" /></button>
          </div>
          <section>
            {data && (
              data.map(item => {
                if (item.status === 'INICIADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })
            )}
          </section>
        </div>

        <div className="lista">
          <div>
            <h1>Tarefas Finalizadas</h1>
            <button className='add'><img src={mais} alt="Add" /></button>
          </div>
          <section>
            {data && (
              data.map(item => {
                if (item.status === 'FINALIZADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })
            )}
          </section>
        </div>
      </div>

      {!data && (
        <div className="spinner">
          <div className="spinner1"></div>
        </div>
      )}
    </div>
  );
}