import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import useFetch from '../../components/Hooks/useFetch';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import './tarefas.css';

export default function HomeTarefas() {

  const options = {
    method: 'GET',
  };
  const [data] = useFetch('http://localhost:3000/task', options);

  // console.log(data);

  return (
    <div className="container-tarefas">
      <Breadcrumb />

      <input type="text" placeholder='Buscar...' className="buscador" />

      {data && (
        <div className="colunas-listas">
          <div className="lista">
            <div>
              <h1>Tarefas Listadas</h1>
              <NavLink className='add' state={'LISTADA'} to='/tarefas/cadastrar'>
                <img src={mais} alt="Add" /></NavLink>
            </div>
            <section>
              {data.map(item => {
                if (item.status === 'LISTADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })}
            </section>
          </div>

          <div className="lista">
            <div>
              <h1>Tarefas Iniciadas</h1>
              <NavLink className='add' state={'INICIADA'} to='/tarefas/cadastrar'>
                <img src={mais} alt="Add" /></NavLink>
            </div>
            <section>
              {data.map(item => {
                if (item.status === 'INICIADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })}
            </section>
          </div>

          <div className="lista">
            <div>
              <h1>Tarefas Finalizadas</h1>
              <NavLink className='add' state={'FINALIZADA'} to='/tarefas/cadastrar'>
                <img src={mais} alt="Add" /></NavLink>
            </div>
            <section>
              {data.map(item => {
                if (item.status === 'FINALIZADA') {
                  return (<Listas key={item.id} id={item.id} name={item.name} status={item.status}
                    description={item.description} create={item.created_at} />)
                }
              })}
            </section>
          </div>
        </div>
      )}

      {!data && (
        <Loader />
      )}
    </div>
  );
}