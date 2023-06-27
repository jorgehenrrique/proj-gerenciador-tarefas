import { useLocation, useNavigate } from 'react-router-dom';
import './voltarInicio.css';
import { useEffect, useState } from 'react';

export default function Logo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [buttonName, setButtonName] = useState('TAREFAS');

  console.log(pathname)

  useEffect(() => {
    (pathname !== '/' ? setButtonName('HOME') : setButtonName('TAREFAS'))
  }, [pathname])

  const voltarHome = () => {
    navigate('/');
  };

  return (
    <>
      <button className="btn" type="button" onClick={voltarHome}>
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