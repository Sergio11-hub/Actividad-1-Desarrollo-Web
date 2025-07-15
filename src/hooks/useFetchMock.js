
import { useState, useEffect } from 'react';
import mockData from '../mock/inventario.json';

function useFetchMock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
}

export default useFetchMock;
