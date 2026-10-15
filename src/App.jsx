import { useState } from 'react'
import { contactosIniciales } from './data/contactos'
import { buscar } from './utils/busqueda'
import './App.css'

function App() {
  const [contactos, setContactos] = useState(contactosIniciales)
  const [texto, setTexto] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  // Búsqueda mediante el adaptador (fuse.js queda aislado en utils/busqueda.js)
  const visibles = buscar(contactos, texto)

  function agregar(e) {
    e.preventDefault()
    if (!nombre.trim() || !telefono.trim()) return
    setContactos([
      ...contactos,
      { id: Date.now(), nombre: nombre.trim(), telefono: telefono.trim() },
    ])
    setNombre('')
    setTelefono('')
  }

  return (
    <div className="app">
      <h1>Agenda de contactos</h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <ul>
        {visibles.map((c) => (
          <li key={c.id}>
            <strong>{c.nombre}</strong> — {c.telefono}
          </li>
        ))}
        {visibles.length === 0 && <li>Sin resultados</li>}
      </ul>

      <h2>Agregar contacto</h2>
      <form onSubmit={agregar}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default App