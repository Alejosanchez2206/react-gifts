import React from 'react'
import { GifGriditem } from './GifGriditem'
import { useFetchGifs } from '../hooks/useFetchGifs'
export const GifGrid = ({ category }) => {

  const { data: imagenes, loading } = useFetchGifs(category);

  return (
    <>
      <h1 className="title">{category}</h1>
      {loading && <p className="animate__animated animate__fadeOut">Cargando...</p>}
      <div className="card-grid">


        {imagenes.map(item => (
          <GifGriditem
            key={item.id}
            {...item}
          />
        ))}

      </div>
    </>
  )
}
