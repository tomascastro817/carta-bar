import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.webp';
import heroImg2 from '../assets/hero2.webp';
import heroImg3 from '../assets/hero3.webp';

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
        </Swiper>

        {/* Hero Overlay Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.2em] mb-4 drop-shadow-2xl"
          >
            Elevando la
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Estética Automotriz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-zinc-400 font-sans tracking-widest text-sm md:text-base max-w-lg mt-2"
          >
            El estándar definitivo en cuidado y protección vehicular
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
