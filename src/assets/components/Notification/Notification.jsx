import { useState } from 'react';
import './Notification.css';

export default function Notification() {

  const [msg, setMsg] = useState(null);
  const [active, setActive] = useState(false);
  const [noActive, setNoActive] = useState(true);

  // console.log(msg);
  // setMsg(msg);
  return (
    <div className={`container-notification ${active ? 'active' : ''} ${noActive ? 'no-active' : ''}`}
      onClick={() => setActive(!active)}
      onDoubleClick={() => setNoActive(!noActive)}>
      <p>Tarefa editada com sucesso!</p>
      <h1>{msg}</h1>
    </div>
  );
}