import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useFetchOptions() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  const fetchData = useCallback((url, options) => {
    fetch(url, options)
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          console.log(res)
          console.log('Tarefa editada com sucesso!')
          setNotice('Tarefa editada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 100);
        } else if (res.status === 201 && res.statusText === 'Created') {
          console.log(res)
          console.log('Tarefa criada com sucesso!')
          setNotice('Tarefa criada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 100);
        } else if (res.status === 204) {
          console.log('Tarefa deletada com sucesso');
          setNotice('Tarefa deletada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 100);
        } else {
          throw new Error('Servidor indisponível');
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
        setNotice('Servidor indisponível!')
        console.log(err.message);
      });
  }, [navigate]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return { data, error, notice, fetchData };
}