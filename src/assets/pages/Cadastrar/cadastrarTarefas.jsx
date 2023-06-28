import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';

export default function CadastrarTarefas() {

  const { state } = useLocation();
  console.log(state)

  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <h3>Cadastrar</h3>
    </div>
  );
}