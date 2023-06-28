import { useLocation, useNavigate } from 'react-router-dom';
import './cadastrarTarefas.css';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';
import { useRef } from 'react';


export default function CadastrarTarefas() {

  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(state)

  const nome = useRef(null);
  const opcao = useRef(null);
  const descricao = useRef(null);

  function handlerSubmit(e) {
    e.preventDefault();
    // console.log(nome.current.value)
    if (!nome.current.value.trim()) {
      // alert("Informe um nome!");
      return;
    }
    // console.log(opcao.current.value)
    if (!opcao.current.value) {
      // alert("Selecione uma opção!");
      return;
    }
    // console.log(descricao.current.value)
    if (!descricao.current.value.trim()) {
      // alert("Adicione uma descrição!");
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${nome.current.value}`, description: `${descricao.current.value}`,
        status: `${opcao.current.value}`
      })
    };
    postFetch(options);
  }

  function postFetch(options) {
    const url = 'http://localhost:3000/task';
    fetch(url, options).then((res) => {
      if (res.status === 201 && res.ok) {
        console.log(res)
        // toast.success('Tarefa criada com sucesso!');
        setTimeout(() => {
          navigate('/tarefas');
        }, 2000);
      } else {
        console.warn(res)
        // toast.error('Erro ao cliar tarefa');
      }
    })
  }


  return (
    <div className="container-cadastrar">
      <Breadcrumb />

      <section className='cadastrar'>
        <form className='form' onSubmit={handlerSubmit}>

          <label htmlFor="nome">Nome</label>
          <input type="text" id='nome' ref={nome} />

          <label htmlFor="select">Select</label>
          <select id='select' ref={opcao} defaultValue={state}>
            <option value="" disabled hidden></option>
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