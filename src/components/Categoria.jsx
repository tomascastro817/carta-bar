// src/components/Categoria.jsx

import PropTypes from 'prop-types';
import Producto from './Producto';

const Categoria = ({  productos }) => {
  return (
    <div className="grid grid-cols-1 w-full gap-1">
    {productos.map((producto) => (
      <Producto key={producto.id} producto={producto} />
    ))}
  </div>
  );
};

// Validación de los props con PropTypes
Categoria.propTypes = {
  nombre: PropTypes.string.isRequired, // Validar que 'nombre' es un string y es requerido
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ).isRequired, // Validar que 'productos' es un array de objetos con la estructura esperada
};

export default Categoria;
