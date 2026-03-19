import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Producto = ({ producto }) => {
  const { nombre, descripcion, precioAuto, precioCamioneta, imagen, nivel } = producto;

  // Determinar color de acento según el nivel
  let accentColor = "from-zinc-500 to-zinc-400";
  let textColor = "text-zinc-300";

  if (nivel === 'Bronce') {
    accentColor = "from-amber-700 to-amber-600";
    textColor = "text-amber-600";
  } else if (nivel === 'Plata') {
    accentColor = "from-gray-300 to-gray-100";
    textColor = "text-gray-200";
  } else if (nivel === 'Oro') {
    accentColor = "from-yellow-400 to-yellow-200";
    textColor = "text-yellow-400";
  } else {
    accentColor = "from-amber-500 to-yellow-500";
    textColor = "text-amber-500";
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col mb-8 border border-zinc-800 relative group"
    >
      {/* Glow Effect en hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${accentColor} rounded-3xl opacity-0 group-hover:opacity-20 blur-md transition duration-1000 group-hover:duration-200`}></div>

      <div className="relative bg-zinc-900 rounded-3xl flex flex-col h-full overflow-hidden z-10">
        {imagen && (
          <div className="h-72 w-full overflow-hidden relative bg-zinc-950/20">
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <div className="w-full h-full p-2">
              <img
                src={imagen}
                alt={nombre}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="absolute top-4 right-4 z-20">
              {nivel && (
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 shadow-lg ${textColor}`}>
                  {nivel}
                </span>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10"></div>
          </div>
        )}

        <div className="p-8 flex flex-col flex-grow relative bg-zinc-900 z-20 -mt-10">
          <h3 className="text-2xl font-display font-black text-zinc-50 mb-4 uppercase tracking-[0.1em] drop-shadow-md">
            {nombre}
          </h3>
          <p className="text-sm md:text-base text-zinc-400/90 mb-8 flex-grow leading-loose font-light">
            {descripcion}
          </p>

          <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-zinc-800/80">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase font-bold text-zinc-500 tracking-[0.2em]">Auto</span>
              <span className={`text-2xl font-black tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${textColor}`}>
                ${precioAuto.toLocaleString('es-AR')}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase font-bold text-zinc-500 tracking-[0.2em]">Camioneta</span>
              <span className={`text-2xl font-black tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${textColor}`}>
                ${precioCamioneta.toLocaleString('es-AR')}
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/+5492804849875?text=${encodeURIComponent(`Hola! Quisiera consultar por el servicio: ${nombre}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 text-green-400 hover:text-green-300 font-bold uppercase tracking-[0.1em] text-xs shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] group backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
            <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300 drop-shadow-md z-10" />
            <span className="z-10 relative">Reservar por WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Validación de los props con PropTypes
Producto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precioAuto: PropTypes.number.isRequired,
    precioCamioneta: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    nivel: PropTypes.string,
  }).isRequired,
};

export default Producto;
