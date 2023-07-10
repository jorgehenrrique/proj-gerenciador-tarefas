/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import './notification.css';
import Context from '../Context/Context';
import { useLocation } from 'react-router-dom';

export default function Notification() {
  const [active, setActive] = useState(null);
  const [noActive, setNoActive] = useState(null);
  const { states, setStates } = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    if (states.msg !== '' && states.msg !== null &&
      states.pg === 'home' && pathname === '/tarefas') {
      setTimeout(() => {
        setNoActive(false);
        setActive(true);
      }, 200);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, msg: '' });
      }, 3000);
    }

    if (states.form !== '' && states.form !== null &&
      states.pg === 'form' && pathname === '/tarefas/cadastrar') {
      setNoActive(false);
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, form: '' });
      }, 2000);
      setNoActive(null);
    }
  }, [states]);

  return (
    <div className={`container-notification ${active ? 'active' : ''} ${noActive ? 'no-active' : ''}`}
      onClick={() => setNoActive(true)}>
      <p>{states.msg || states.form}</p>
    </div>
  );
}