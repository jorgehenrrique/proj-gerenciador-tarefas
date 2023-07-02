import { useLocation, useNavigate } from 'react-router-dom';
import './voltarInicio.css';
import { useEffect, useState } from 'react';

export default function Logo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [buttonName, setButtonName] = useState('TAREFAS');

  useEffect(() => {
    (pathname !== '/tarefas' && pathname !== '/' ? setButtonName('HOME') : setButtonName('TAREFAS'))
  }, [pathname])

  const voltarHome = () => {
    navigate('/tarefas');
  };

  return (
    <>
      <button className="btn hidden" type="button" onClick={voltarHome}>
        <strong>{buttonName}</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </>
  );
}