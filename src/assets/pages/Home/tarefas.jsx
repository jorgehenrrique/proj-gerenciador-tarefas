import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import './spinner.css';
import './tarefas.css';
import useFetch from '../../components/Hooks/useFetch';
import { NavLink } from 'react-router-dom';

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
            <NavLink className='add' state={'LISTADA'} to='/tarefas/cadastrarTarefas'>
              <img src={mais} alt="Add" /></NavLink>
          </div>
          <section>
            {data && (
              data.map(item => {
                // if (item.status === 'LISTADA') {
                if (item.status) {
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
            {/* <button className='add'><img src={mais} alt="Add" /></button> */}
            <NavLink className='add' state={'INICIADA'} to='/tarefas/cadastrarTarefas'>
              <img src={mais} alt="Add" /></NavLink>
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
            {/* <button className='add'><img src={mais} alt="Add" /></button> */}
            <NavLink className='add' state={'FINALIZADA'} to='/tarefas/cadastrarTarefas'>
              <img src={mais} alt="Add" /></NavLink>
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