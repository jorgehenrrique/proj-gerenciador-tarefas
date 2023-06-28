import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';

export default function CadastrarTarefas() {

  const { state } = useLocation();
  console.log(state)

  function handlerSubmit(e) {
    e.preventDefault();
    // if (!name.current.value.trim()) {
    //   alert("Informe um nome correto!");
    //   return;
    // }
    // if (!email.current.value.trim()) {
    //   alert("Informe um Email correto!");
    //   return;
    // }
    // if (!password.current.value.trim() || !passwordConfirm.current.value.trim()) {
    //   alert("Informe as senhas nos dois campos!");
    //   return;
    // }
    // if (password.current.value.trim() !== passwordConfirm.current.value.trim()) {
    //   alert("Campos de senha inválidos!");
    //   return;
    // }
    // if (!checkboxContirm.current.checked) {
    //   alert("Aceite os termos de uso!");
    //   return;
    // }
  }

  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <section className='cadastrar'>
        <form className='form' onSubmit={handlerSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' />

          <label htmlFor="select">Select</label>
          <select id='select'>
            <option value="" selected disabled hidden></option>
            <option value="LISTADA">LISTADA</option>
            <option value="INICIADA">INICIADA</option>
            <option value="FINALIZADA">FINALIZADA</option>
          </select>

          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" cols="30" rows="10"></textarea>

          <div>
            <button>Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  );
}