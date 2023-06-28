/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Formulario({ state }) {
  const navigate = useNavigate();

  const nome = useRef(null);
  const opcao = useRef(null);
  const descricao = useRef(null);
  const { name, status, description, id, create } = state;
  // console.log('Nome: ' + name, 'Status: ' + status, 'Descricao: ' + description, 'ID: ' + id, 'Crate: ' + create);

  if (state === 'LISTADA' || state === 'INICIADA' || state === 'FINALIZADA') {
    console.log('Entrou por adc taferas')
  } else {
    console.log('Não entrou por adc taferas')
  }

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

    const options = {
      method: id ? 'PUT' : 'POST',
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
    const url = `http://localhost:3000/task/${id ?? ''}`;
    fetch(url, options).then((res) => {
      if (res.status === 200 && res.ok) {
        console.log(res)
        console.log('Tarefa editada com sucesso!')
        setTimeout(() => {
          navigate('/tarefas');
        }, 2000);
      } else if (res.status === 201 && res.ok) {
        console.log(res)
        console.log('Tarefa criada com sucesso!')
        setTimeout(() => {
          navigate('/tarefas');
        }, 2000);
      } else {
        console.warn(res)
        console.warn('Erro ao cliar tarefa')
      }
    })
  }

  return (
    <form className='form' onSubmit={handlerSubmit}>

      <label htmlFor="nome">Nome</label>
      <input type="text" id='nome' defaultValue={name} ref={nome} />

      <label htmlFor="select">Select</label>
      <select id='select' ref={opcao} defaultValue={status || state}>
        <option value="" disabled hidden></option>
        <option value="LISTADA">LISTADA</option>
        <option value="INICIADA">INICIADA</option>
        <option value="FINALIZADA">FINALIZADA</option>
      </select>

      <label htmlFor="descricao">Descrição</label>
      <textarea ref={descricao} defaultValue={description} id="descricao" cols="30" rows="10"></textarea>

      <div>

        <button>Cadastrar</button>
      </div>

    </form>
  );
}