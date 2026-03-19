import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Categoria from './Categoria';
import products from '../data/products';

const Carta = () => {
  const categorias = ['Packs Premium', 'Pulidos', 'Preventa', 'Especiales'];

  const [activeCategory, setActiveCategory] = useState('Packs Premium'); // Abrir Packs por defecto

  const toggleCategory = (categoria) => {
    if (activeCategory === categoria) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoria);
    }
  };

  return (
    <div className="pb-16 pt-8 font-sans">
      {categorias.map((categoria, index) => {
        const productosPorCategoria = products.filter(
          (producto) => producto.categoria === categoria
        );

        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            key={categoria}
            className="rounded-2xl shadow-xl mb-6 bg-zinc-900 border border-zinc-800/80 overflow-hidden mx-4 lg:mx-12 group"
          >
            <button
              className="flex items-center w-full text-left px-8 py-6 bg-zinc-900 text-zinc-100 text-xl font-bold hover:bg-zinc-800/80 transition-all duration-300 relative overflow-hidden"
              onClick={() => toggleCategory(categoria)}
            >
              {activeCategory === categoria && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
              )}
              <span className="mr-4 tracking-[0.15em] uppercase drop-shadow-sm">{categoria}</span>
              <span className="ml-auto">
                {activeCategory === categoria ? (
                  <FaChevronUp className="text-amber-500 text-2xl transition-transform" />
                ) : (
                  <FaChevronDown className="text-zinc-500 text-2xl transition-transform group-hover:text-amber-500/50" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {activeCategory === categoria && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                  className="bg-zinc-950/80 px-4 md:px-8 py-8 border-t border-zinc-800/80"
                >
                  <Categoria
                    nombre={categoria}
                    productos={productosPorCategoria}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Carta;
