import Fuse from 'fuse.js'

// Adaptador de búsqueda: es el ÚNICO archivo que importa fuse.js.
// Si se cambia de biblioteca (por ejemplo a match-sorter),
// solo hay que modificar este archivo.

export function buscar(contactos, texto) {
  const consulta = texto.trim()
  if (!consulta) return contactos

  const fuse = new Fuse(contactos, {
    keys: ['nombre'],
    threshold: 0.4,
    ignoreLocation: true,
    ignoreDiacritics: true,
  })

  return fuse.search(consulta).map((resultado) => resultado.item)
}