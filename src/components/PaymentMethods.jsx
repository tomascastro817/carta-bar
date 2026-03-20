import { motion } from 'framer-motion';
import { FaCreditCard, FaMoneyBillWave, FaExchangeAlt, FaRegCreditCard } from 'react-icons/fa';

const PaymentMethods = () => {
  const methods = [
    { name: 'Efectivo', icon: <FaMoneyBillWave className="text-xl" /> },
    { name: 'Transferencia', icon: <FaExchangeAlt className="text-xl" /> },
    { name: 'Débito', icon: <FaRegCreditCard className="text-xl" /> },
    { name: 'Crédito', icon: <FaCreditCard className="text-xl" /> },
  ];

  return (
    <div className="py-4 px-4 font-sans mt-2 mb-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider drop-shadow-md font-display">
          Medios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Pago</span>
        </h3>
        <div className="w-12 h-0.5 bg-amber-500 mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.3)]"></div>
      </motion.div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto px-1">
        {methods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-zinc-900/80 border border-zinc-800/60 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm hover:border-amber-500/40 hover:bg-zinc-800 transition-all duration-300 group hover:-translate-y-0.5"
          >
            <div className="text-zinc-500 group-hover:text-amber-500 transition-all duration-300 mb-1.5 drop-shadow-sm">
              {method.icon}
            </div>
            <h4 className="text-zinc-300 font-semibold tracking-wide text-[10px] md:text-xs uppercase">{method.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
