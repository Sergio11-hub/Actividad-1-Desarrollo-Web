
import React, { useState, useEffect } from 'react';
import useFetchMock from '../hooks/useFetchMock';

function Home() {
  const { data: initialItems, loading } = useFetchMock();
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  useEffect(() => {
    if (!loading) {
      setItems(initialItems);
    }
  }, [initialItems, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && cantidad) {
      const newItem = {
        id: items.length + 1,
        nombre,
        cantidad: parseInt(cantidad, 10)
      };
      setItems([...items, newItem]);
      setNombre('');
      setCantidad('');
    }
  };

  return (
    <div className="home">
      <h2>Lista de Inventario</h2>
      {loading ? <p>Cargando...</p> : (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.nombre} - {item.cantidad}</li>
          ))}
        </ul>
      )}

      <h3>Agregar nuevo producto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default Home;
