/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react';
import './formulario.css';
import useFetchOptions from '../Hooks/useFetchOptions';
import Context from '../Context/Context';

export default function Formulario({ state }) {

  const nome = useRef(null);
  const opcao = useRef(null);
  const descricao = useRef(null);
  const { name, status, description, id, create } = state;
  const { notice, fetchData } = useFetchOptions();
  const { states, setStates } = useContext(Context);

  const [isCadastrarDisabled, setIsCadastrarDisabled] = useState(false);

  // if (state === 'LISTADA' || state === 'INICIADA' || state === 'FINALIZADA') {
  //   console.log('Entrou por adc taferas')
  // } else {
  //   console.log('Não entrou por adc taferas')
  // }

  function handlerSubmit() {
    if (!nome.current.value.trim()) {
      setStates({ ...states, form: "Informe um nome!", pg: 'form' });
      setIsCadastrarDisabled(true);
      setTimeout(() => {
        setIsCadastrarDisabled(false);
      }, 2000);
      return;
    }
    if (!opcao.current.value) {
      setStates({ ...states, form: "Selecione uma opção!", pg: 'form' });
      setIsCadastrarDisabled(true);
      setTimeout(() => {
        setIsCadastrarDisabled(false);
      }, 2000);
      return;
    }
    if (!descricao.current.value.trim()) {
      setStates({ ...states, form: "Adicione uma descrição!", pg: 'form' });
      setIsCadastrarDisabled(true);
      setTimeout(() => {
        setIsCadastrarDisabled(false);
      }, 2000);
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
    updateTarefa(options);
  }

  function updateTarefa(options) {
    const url = `http://localhost:3000/task/${id ?? ''}`;
    fetchData(url, options);
  }

  function deleteTarefa(id) {
    // console.log(id)
    const url = `http://localhost:3000/task/${id}`;
    const options = { method: 'DELETE' };
    fetchData(url, options);
  }

  useEffect(() => {
    setStates({ ...states, msg: notice, pg: 'home' })
  }, [notice]);

  return (
    <>
      <form className='form' onSubmit={(e) => e.preventDefault()}>

        <label htmlFor="nome">Nome</label>
        <input type="text" id='nome' defaultValue={name} ref={nome} />

        <label htmlFor="select">Tipo de lista</label>
        <select id='select' ref={opcao} defaultValue={status || state}>
          <option value="" disabled hidden></option>
          <option value="LISTADA">LISTADA</option>
          <option value="INICIADA">INICIADA</option>
          <option value="FINALIZADA">FINALIZADA</option>
        </select>

        <label htmlFor="descricao">Descrição</label>
        <textarea ref={descricao} defaultValue={description} id="descricao" cols="30" rows="10"></textarea>

        <div>
          {id && (
            <button onClick={() => deleteTarefa(id)}>Deletar</button>
          )}
          <button onClick={handlerSubmit} disabled={isCadastrarDisabled}>{id ? 'Atualizar' : 'Cadastrar'}</button>
        </div>

      </form>
    </>
  );
}