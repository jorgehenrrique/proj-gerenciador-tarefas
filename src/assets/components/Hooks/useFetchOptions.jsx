import { useCallback, useState } from 'react';

export default function useFetchOptions() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback((url, options) => {
    fetch(url, options)
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          console.log(res)
          console.log('Tarefa editada com sucesso!')
          return res.json();
        } else if (res.status === 201 && res.statusText === 'Created') {
          console.log(res)
          console.log('Tarefa criada com sucesso!')
          // setTimeout(() => {
          //   navigate('/tarefas');
          // }, 2000);
        } else if (res.status === 204) {
          console.log('Tarefa deletada com sucesso');
          // setTimeout(() => {
          //   navigate('/tarefas');
          // }, 2000);
        } else {
          throw new Error('Servidor indisponível');
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return { data, error, fetchData };
}