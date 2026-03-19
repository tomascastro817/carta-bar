import { motion } from 'framer-motion';
import { CarFront, ChevronRight } from 'lucide-react';

const Domicilio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-2 lg:mx-12 mb-8"
    >
      <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors hover:bg-zinc-900/80 hover:border-zinc-700/80 cursor-pointer group">
        <div className="flex items-center gap-4 w-full sm:w-auto text-center sm:text-left">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800/80 shadow-inner group-hover:border-amber-500/30 transition-colors">
            <CarFront className="w-5 h-5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Servicio a Domicilio</h4>
            <p className="text-xs text-zinc-500 font-light">Llevamos el detallado premium a tu casa o trabajo.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Domicilio;
