import './editarTarefas.css';
import { useLocation } from 'react-router-dom';


export default function EditarTarefas() {
  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className="container-editar">
      <h2>editar</h2>
    </div>
  );
}
