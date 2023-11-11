import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Noticias from './components/noticias';

const App = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api')
      .then(response => response.text())
      .then(data => {
        console.log('Respuesta de la API:', data);
        setNoticias(JSON.parse(data));
      })
      .catch(error => console.error('Error al obtener noticias:', error));
  }, []);
  
  

  return (
    <div>
      <Navbar />
      <Noticias noticias={noticias} />
    </div>
  );
}

export default App;
