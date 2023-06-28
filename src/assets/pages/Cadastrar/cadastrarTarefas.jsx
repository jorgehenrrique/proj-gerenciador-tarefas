import { useLocation } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import { useRef } from 'react';

export default function CadastrarTarefas() {

  const { state } = useLocation();
  console.log(state)

  const nome = useRef(null);
  const opcao = useRef(null);
  const descricao = useRef(null);

  function handlerSubmit(e) {
    e.preventDefault();
    if (!nome.current.value.trim()) {
      alert("Informe um nome!");
      return;
    }
    if (!opcao.current.value) {
      alert("Selecione uma opção!");
      return;
    }
    if (!descricao.current.value.trim()) {
      alert("Adicione uma descrição!");
      return;
    }
  }

  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <section className='cadastrar'>
        <form className='form' onSubmit={handlerSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' ref={nome} />

          <label htmlFor="select">Select</label>
          <select id='select' ref={opcao}>
            <option value="" selected disabled hidden></option>
            <option value="LISTADA">LISTADA</option>
            <option value="INICIADA">INICIADA</option>
            <option value="FINALIZADA">FINALIZADA</option>
          </select>

          <label htmlFor="descricao">Descrição</label>
          <textarea ref={descricao} id="descricao" cols="30" rows="10"></textarea>

          <div>
            <button>Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  );
}