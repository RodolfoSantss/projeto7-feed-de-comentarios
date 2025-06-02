import { useState } from 'react'
import FormularioComentario from './FormularioComentario'
import ListaComentarios from './ListaComentarios'
import './index.css'

const FeedDeComentarios = () => {
  const [comentarios, setComentarios] = useState([])

  const adicionarComentario = (novoComentario) => {
    if (novoComentario.trim() !== '') {
      setComentarios([...comentarios, novoComentario])
    }}

  return (
    <div className='FeedDeComentarios-container'>
      <h1>Feed de Comentários</h1>
      <label>Seu Comentário</label>
      <FormularioComentario onEnviarComentario={adicionarComentario} /><br /><br />
      <h1>Comentários</h1>
      <ListaComentarios comentarios={comentarios} className='Comment'/><br /><br />
    </div>
  )
}

export default FeedDeComentarios