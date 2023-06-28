import { useEffect, useState } from 'react';


export default function useFetch(url) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then((res) => {
      if (res.status === 200 && res.ok) {
        return res.json();
      } else {
        throw new Error('Servidor indisponível');
      }
    }).then((data) => {
      return setData(data);
    }).catch((err) => {
      console.log(err.message);
    });
  }, [url]);

  return [data];
}