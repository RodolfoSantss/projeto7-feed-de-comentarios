import { useState } from 'react'
import './index.css'

const FormularioComentario = ({ onEnviarComentario }) => {
  const [comentario, setComentario] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onEnviarComentario(comentario)
    setComentario('')
    }

  return (
    <form onSubmit={handleSubmit} className='FormularioComentario-container'>
        <input
            type="text"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Digite seu comentário"
        />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioComentario