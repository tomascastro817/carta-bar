import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.webp';
import heroImg2 from '../assets/hero2.webp';
import heroImg3 from '../assets/hero3.webp';
import heroImg4 from '../assets/hero4.webp';
const Hero = () => {
  return (
    <div className="relative bg-zinc-950 font-display">
      {/* Carrousel */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-bottom relative"
              style={{
                backgroundImage: `url(${heroImg})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-bottom relative"
              style={{
                backgroundImage: `url(${heroImg2})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-bottom relative"
              style={{
                backgroundImage: `url(${heroImg3})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-bottom relative"
              style={{
                backgroundImage: `url(${heroImg4})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Hero Overlay Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none pb-24 md:pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider md:tracking-[0.2em] mb-4 drop-shadow-2xl leading-tight md:leading-snug max-w-5xl"
          >
            Haz que tu coche
            <br className="hidden md:block" />
            {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              sea detallado por los mejores
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-zinc-400 font-sans tracking-widest text-xs sm:text-sm md:text-base max-w-lg mt-2 leading-relaxed"
          >
            Detallista móvil profesional que presta servicio en Puerto Madryn y alrededores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 md:mt-8 pointer-events-auto flex justify-center w-full"
          >
            <div className="inline-flex items-center justify-center gap-2.5 bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 px-5 py-2 md:px-8 md:py-3 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-amber-500"></span>
              </div>
              <span className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                Servicio a Domicilio
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
