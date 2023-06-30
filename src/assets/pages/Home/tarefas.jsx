import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import './tarefas.css';
import { useEffect, useRef, useState } from 'react';
import Notification from '../../components/Notification/Notification';

export default function HomeTarefas() {

  const [data, setData] = useState(null);
  // const [erro, setErro] = useState(null);
  const [bkp, setBkp] = useState(null);
  const [update, setUpdate] = useState(false);
  const tarefa = useRef();

  useEffect(() => {
    // console.log('Buscando os dados...');
    fetch('http://localhost:3000/task')
      .then((res) => {
        if (res.status === 200 && res.ok) {
          return res.json();
        } else {
          throw new Error('Servidor indisponível');
        }
      }).then((data) => {
        setBkp(data);
        return setData(data);
      }).catch((err) => {
        // setErro(err.message);
        console.log(err.message);
      });

    return (() => setUpdate(false));
  }, [update]);


  // const memoizedData = useMemo(() => {
  //   return data;
  // }, [data]);
  // data = memoizedData;
  // console.log(data);



  function buscarTarefa() {
    const busca = tarefa.current.value.trim().toLowerCase();
    console.log(busca)

    const newData = data.filter(tarefa => {
      return tarefa.status.toLowerCase().includes(busca) ||
        tarefa.name.toLowerCase().includes(busca) ||
        tarefa.description.toLowerCase().includes(busca);
    });

    busca === '' ? setUpdate(true) : setData(newData);
    // console.log(newData)
    // console.log(data)
    // console.log(bkp)
  }

  function handleClear(event) {
    if (event.key === 'Backspace') {
      setData(bkp);
    }
  }

  return (
    <div className="container-tarefas">
      <Breadcrumb />
      <Notification />

      <input ref={tarefa} onChange={buscarTarefa} onKeyUpCapture={handleClear}
        type="search" placeholder='Buscar...'
        className="buscador" />

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
                    description={item.description} create={item.created_at} setUpdate={setUpdate} />)
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
                    description={item.description} create={item.created_at} setUpdate={setUpdate} />)
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
                    description={item.description} create={item.created_at} setUpdate={setUpdate} />)
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
