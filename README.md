# Agenda de contactos

Ejercicio propio en React + Vite: una agenda de contactos con buscador y formulario para agregar contactos.

## Biblioteca agregada

**fuse.js** (v7.5.0), una biblioteca de búsqueda difusa (fuzzy search).

**Para qué:** reemplaza el buscador escrito a mano con `.includes()`. Con fuse.js la búsqueda ignora tildes (`maria` encuentra `María`), tolera errores de escritura y ordena los resultados por relevancia.

**Cómo está integrada:** solo el archivo `src/utils/busqueda.js` (adaptador) importa fuse.js. El resto de la aplicación usa la función `buscar(contactos, texto)`. Para cambiar de biblioteca solo hay que modificar ese archivo.

## Instalación

```bash
npm install
npm run dev
```

Luego abre http://localhost:5173/

## Análisis escrito

**1. ¿Qué resolvía el código anterior y qué se gana con la biblioteca?**
el código anterior eran 3 líneas con .includes() y no ignoraba tildes, no toleraba errores ni ordenaba por relevancia. Con fuse.js se cubren esos casos.

**2. ¿Qué criterio de la tabla pesó más y cuándo convendría la alternativa?**
el criterio que elegiste en tu párrafo de decisión. match-sorter convendría si el tamaño fuera lo más importante (3.2 kB contra 9.2 kB).

**3. ¿Qué riesgo introduce la dependencia y cómo se reduce?**
el riesgo es depender de código ajeno. El adaptador hace que solo un archivo cambie al migrar, y package.json registra la versión.