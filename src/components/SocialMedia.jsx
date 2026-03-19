import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

const SocialMedia = () => {
  // Redes sociales del bar
  const facebookUrl = "https://www.facebook.com/barvintage"; // Reemplaza con el enlace de la página de Facebook del bar
  const whatsappUrl = "https://wa.me/+543862512795"; // Reemplaza con el enlace de la cuenta de WhatsApp del bar
  const instagramUrl = "https://www.instagram.com/barvintage"; // Reemplaza con el enlace de Instagram del bar

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="relative -top-24 z-20 pt-8 pb-8 rounded-3xl mx-4 lg:mx-12 bg-zinc-900/60 backdrop-blur-2xl border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
    >
      {/* Logo y Nombre */}
      <div className="flex flex-col items-center justify-center space-y-5 pb-5">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img
            src={logo}
            alt="Logo Detailing"
            className="relative w-32 h-32 rounded-full shadow-2xl object-cover border-2 border-zinc-600/80"
          />
        </motion.div>
        {/* Nombre */}
        <div className="text-center font-display">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-white to-zinc-400 text-4xl font-black tracking-[0.2em] uppercase drop-shadow-lg">
            TripleX Detailing
          </h3>
          <p className="text-amber-500/80 text-xs font-bold tracking-[0.3em] uppercase mt-2">Puerto Madryn</p>
        </div>
      </div>

      <div className="w-2/3 mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>

      {/* Íconos de redes sociales */}
      <div className="flex justify-center space-x-10 pb-2">
        <motion.a
          whileHover={{ y: -5, scale: 1.1 }}
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-zinc-800/40 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-zinc-700/50 group hover:border-blue-500/50 hover:shadow-blue-500/20"
        >
          <FaFacebook className="text-zinc-500 group-hover:text-blue-500 text-3xl transition-colors" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5, scale: 1.1 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-zinc-800/40 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-zinc-700/50 group hover:border-green-500/50 hover:shadow-green-500/20"
        >
          <FaWhatsapp className="text-zinc-500 group-hover:text-green-500 text-3xl transition-colors" />
        </motion.a>
        <motion.a
          whileHover={{ y: -5, scale: 1.1 }}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-zinc-800/40 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-zinc-700/50 group hover:border-pink-500/50 hover:shadow-pink-500/20"
        >
          <FaInstagram className="text-zinc-500 group-hover:text-pink-500 text-3xl transition-colors" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SocialMedia;
