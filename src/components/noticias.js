import React from 'react';

const Noticias = ({ noticias }) => {
    return (
      <div className="container mt-4">
        <h2>Últimas Noticias</h2>
        {noticias.length > 0 ? (
          <ul className="list-group">
            {noticias.map((noticia, index) => (
              <li key={index} className="list-group-item">
                <h5>{noticia.titulo}</h5>
                <p>{noticia.noticia}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
    );
  }

export default Noticias;
