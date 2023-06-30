/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import './Notification.css';
import Context from '../Context/Context';

export default function Notification() {
  const [active, setActive] = useState(null);
  const [noActive, setNoActive] = useState(null);
  const { states, setStates } = useContext(Context);

  useEffect(() => {
    if (states.msg !== '' && states.msg !== null) {
      console.log('NOTIFICACAO ACIONADA', states.msg);
      setTimeout(() => {
        setActive(true);
      }, 400);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, msg: '' });
      }, 4500);
    }
  }, [states]);

  return (
    <div className={`container-notification ${active ? 'active' : ''} ${noActive ? 'no-active' : ''}`}
      onClick={() => setNoActive(true)}>
      <p>{states.msg}</p>
    </div>
  );
}