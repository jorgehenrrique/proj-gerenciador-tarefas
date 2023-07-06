/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Listas from '../../components/Listas/listas';
import mais from './icon/mais.png';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import './tarefas.css';
import Notification from '../../components/Notification/Notification';
import { useEffect, useRef, useState } from 'react';
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useFetchOptions from '../../components/Hooks/useFetchOptions';

export default function HomeTarefas() {

  const [data, setData] = useState(null);
  const [bkp, setBkp] = useState(null);
  const [update, setUpdate] = useState(false);
  const tarefa = useRef();
  const { fetchData } = useFetchOptions(); // hook personalizado - de Fetch

  useEffect(() => {
    fetch('http://localhost:3000/task')
      .then((res) => {
        if (res.status === 200 && res.ok) {
          return res.json();
        } else {
          alert('Servidor indisponível!');
        }
      }).then((data) => {
        setBkp(data);
        return setData(data);
      });

    return (() => setUpdate(false));
  }, [update]);

  function buscarTarefa() {
    const busca = tarefa.current.value.trim().toLowerCase();

    const newData = data.filter(tarefa => {
      return tarefa.status.toLowerCase().includes(busca) ||
        tarefa.name.toLowerCase().includes(busca) ||
        tarefa.description.toLowerCase().includes(busca);
    });

    busca === '' ? setUpdate(true) : setData(newData);
  }

  function handleClear(event) {
    if (event.key === 'Backspace') {
      setData(bkp);
    }
  }

  // Drag-n-Drop react-dnd
  function handleDrop(notaId, novaCategoria) {
    changeType(novaCategoria, notaId)
  }

  function CategoriaDestino({ categoria }) {
    const [{ isOver }, dropRef] = useDrop({
      accept: 'nota',
      drop: (item) => {
        handleDrop(item.id, categoria);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    return (
      <div ref={dropRef} className={`dnd ${isOver ? 'over' : ''}`} >
        {categoria}
      </div>
    );
  }

  // Altera a categoria
  function changeType(tipo, id) {
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: `${tipo}` })
    }
    const url = `http://localhost:3000/task/${id}`;
    fetchData(url, options);
    setUpdate(true); // Atualiza tarefas
  }

  return (
    <div className="container-tarefas">
      <Breadcrumb />
      <Notification />

      <input ref={tarefa}
        onChange={buscarTarefa}
        onKeyUpCapture={handleClear}
        type="search"
        placeholder='Buscar...'
        className="buscador" />

      {data && (
        <DndProvider backend={HTML5Backend}>
          <div className="colunas-listas">
            <div className="lista">
              <div>
                <CategoriaDestino categoria="LISTADA" />
                <NavLink
                  className='add'
                  state={'LISTADA'}
                  to='/tarefas/cadastrar'>
                  <img src={mais} alt="Add" />
                </NavLink>
              </div>
              <section>
                {data.map(item => {
                  if (item.status === 'LISTADA') {
                    return (
                      <Listas
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        status={item.status}
                        description={item.description}
                        create={item.created_at}
                        setUpdate={setUpdate} />);
                  }
                  return null;
                })}
              </section>
            </div>

            <div className="lista">
              <div>
                <CategoriaDestino categoria="INICIADA" />
                <NavLink
                  className='add'
                  state={'INICIADA'}
                  to='/tarefas/cadastrar'>
                  <img src={mais} alt="Add" />
                </NavLink>
              </div>
              <section>
                {data.map(item => {
                  if (item.status === 'INICIADA') {
                    return (
                      <Listas
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        status={item.status}
                        description={item.description}
                        create={item.created_at}
                        setUpdate={setUpdate} />);
                  }
                  return null;
                })}
              </section>
            </div>

            <div className="lista">
              <div>
                <CategoriaDestino categoria="FINALIZADA" />
                <NavLink
                  className='add'
                  state={'FINALIZADA'}
                  to='/tarefas/cadastrar'>
                  <img src={mais} alt="Add" />
                </NavLink>
              </div>
              <section>
                {data.map(item => {
                  if (item.status === 'FINALIZADA') {
                    return (
                      <Listas
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        status={item.status}
                        description={item.description}
                        create={item.created_at}
                        setUpdate={setUpdate} />);
                  }
                  return null;
                })}
              </section>
            </div>
          </div>
        </DndProvider>
      )}

      {!data && <Loader />}
    </div>
  );
}
