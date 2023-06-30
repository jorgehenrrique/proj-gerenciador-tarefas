import { useContext, useEffect, useState } from 'react';
import './Notification.css';
import Context from '../Context/Context';

export default function Notification() {
  const [active, setActive] = useState(null);
  const [noActive, setNoActive] = useState(null);
  const { states, setStates } = useContext(Context);

  useEffect(() => {
    console.log('NOTIFICACAO ACIONADA', states);
    if (states.msg !== '' && states.msg !== null) {
      console.log('NOTIFICACAO ACIONADA', states.msg);
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setNoActive(true);
        setStates({ ...states, msg: '' });
      }, 4000);
    }
  }, [states]);



  // console.log(msg);
  // setMsg(msg);
  return (
    <div className={`container-notification ${active ? 'active' : ''} ${noActive ? 'no-active' : ''}`}
      onClick={() => setActive(!active)}
      onDoubleClick={() => setNoActive(!noActive)}>
      <p>Tarefa editada com sucesso!</p>
    </div>
  );
}