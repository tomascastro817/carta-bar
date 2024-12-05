// src/components/Carta.jsx

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa los íconos de React Icons
import Categoria from './Categoria';
import products from '../data/products';

const Carta = () => {
  const categorias = ['Burgers', 'Drinks', 'Sandwich']; // Puedes agregar más categorías aquí

  // Usamos useState para manejar la categoría activa
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (categoria) => {
    if (activeCategory === categoria) {
      setActiveCategory(null); // Si la categoría ya está activa, la cerramos
    } else {
      setActiveCategory(categoria); // Si no, la abrimos
    }
  };

  return (
    <div className=""> {/* Aumentamos el espacio entre categorías */}
      {categorias.map((categoria) => {
        // Filtramos los productos por categoría
        const productosPorCategoria = products.filter(
          (producto) => producto.categoria === categoria
        );

        return (
          <div key={categoria} className="rounded-lg shadow-lg">
            <button
              className="flex items-center w-full text-left px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
              onClick={() => toggleCategory(categoria)}
            >
              <span className="mr-4 font-semibold">{categoria}</span>
              <span className="ml-auto">
                {activeCategory === categoria ? (
                  <FaChevronUp className="text-black text-xl" />
                ) : (
                  <FaChevronDown className="text-black text-xl" />
                )}
              </span>
            </button>

            {activeCategory === categoria && (
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Categoria
                  nombre={categoria}
                  productos={productosPorCategoria}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carta;
