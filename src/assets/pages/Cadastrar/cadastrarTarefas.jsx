import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import Formulario from '../../components/Formulario/formulario';


export default function CadastrarTarefas() {

  const { state } = useLocation();

  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <section className='cadastrar'>
        <Formulario state={state} />
      </section>
    </div>
  );
}