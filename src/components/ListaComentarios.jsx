import { useState } from 'react'
import './index.css'
const ListaComentarios = ({ comentarios }) => {
  return (
    <ul>
      {comentarios.map((comentario, index) => (
        <li key={index}>{comentario}</li>
      ))}
    </ul>
  )
}
export default ListaComentarios