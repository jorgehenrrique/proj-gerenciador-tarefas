/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import './Notification.css';
import Context from '../Context/Context';
import { useLocation } from 'react-router-dom';

export default function Notification() {
  const [active, setActive] = useState(null);
  const [noActive, setNoActive] = useState(null);
  const { states, setStates } = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    if (states.msg !== '' && states.msg !== null && states.pg === 'home' && pathname === '/tarefas') {
      console.log('NOTIFICACAO ACIONADA, HOME', states.msg, states.pg);
      setTimeout(() => {
        setActive(true);
      }, 400);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, msg: '' });
      }, 3000);
    }

    if (states.msg !== '' && states.msg !== null && states.pg === 'form' && pathname === '/tarefas/cadastrar') {
      console.log('NOTIFICACAO ACIONADA FORM', states.msg, states.pg);
      setTimeout(() => {
        setActive(true);
      }, 0);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, msg: '' });
      }, 3000);
      setNoActive(null);
    }
  }, [states]);

  useEffect(() => {
    // setActive(false);
    // setNoActive(true);
    console.log('ALTERNOU', pathname)
  }, [pathname]);

  return (
    <div className={`container-notification ${active ? 'active' : ''} ${noActive ? 'no-active' : ''}`}
      onClick={() => setNoActive(true)}>
      <p>{states.msg}</p>
    </div>
  );
}