// src/components/Producto.jsx

import PropTypes from 'prop-types';

const Producto = ({ producto }) => {
  const { nombre, descripcion, precio } = producto;

  return (
    <div className="bg-white p-2 rounded-xl shadow-xl transition-transform transform lg:hover:scale-105 hover:shadow-2xl">
      <h3 className="text-base font-bold text-black mb-1">{nombre}</h3>
      <p className="text-sm md:text-base text-gray-700 mb-2 italic">{descripcion}</p>
      <p className="text-base text-black font-bold">Precio: ${precio}</p>
    </div>
  );
};

// Validación de los props con PropTypes
Producto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};

export default Producto;
