import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Formulario from '../../components/Formulario/formulario';
import Notification from '../../components/Notification/Notification';


export default function CadastrarTarefas() {

  const { state } = useLocation();

  return (
    <div className="container-cadastrar">
      <Breadcrumb />
      <Notification />

      <section className='cadastrar'>
        <Formulario state={state} />
      </section>
    </div>
  );
}