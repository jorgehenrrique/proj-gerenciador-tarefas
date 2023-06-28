import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';

export default function CadastrarTarefas() {

  const { state } = useLocation();
  console.log(state)

  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <section className='cadastrar'>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' />

          <label htmlFor="select">Select</label>
          <select id='select'>
            <option value="" selected disabled></option>
            <option value="LISTADA">LISTADA</option>
            <option value="INICIADA">INICIADA</option>
            <option value="FINALIZADA">FINALIZADA</option>
          </select>

          <label htmlFor="descricao">Descrição</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </section>
    </div>
  );
}