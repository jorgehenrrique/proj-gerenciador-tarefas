import { useEffect, useState } from 'react';


export default function useFetch(url, options) {

  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(url, options).then((res) => {
      if (res.status === 200 && res.ok) {
        return res.json();
      } else {
        throw new Error('Servidor indisponível');
      }
    }).then((data) => {
      return setData(data);
    }).catch((err) => {
      setErro(err.message);
      console.log(err.message);
    });
  }, [url]);

  return [data, erro];
}