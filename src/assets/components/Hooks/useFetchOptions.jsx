import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useFetchOptions() {
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  const fetchData = useCallback((url, options) => {
    fetch(url, options)
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          setNotice('Tarefa editada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 200);
        } else if (res.status === 201 && res.statusText === 'Created') {
          setNotice('Tarefa criada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 200);
        } else if (res.status === 204) {
          setNotice('Tarefa deletada com sucesso!')
          setTimeout(() => {
            navigate('/tarefas');
          }, 200);
        } else {
          throw new Error('Servidor indisponível');
        }
      }).catch(() => {
        setNotice('Servidor indisponível!')
      });
  }, [navigate]);

  return { notice, fetchData };
}