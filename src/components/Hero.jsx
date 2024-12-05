import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos de Swiper

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Carrousel */}
      <div className="relative h-48 lg:h-96 overflow-hidden">
        <Swiper
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://www.comunicare.es/wp-content/uploads/2021/01/Publicidad-para-bares.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1185421185/es/foto/hamburguesa-cl%C3%A1sica-con-patatas-fritas-horizontal.jpg?s=1024x1024&w=is&k=20&c=r0UthTjpQXmOMrCyLVYzDFJQiy74kLYMYpP2TMPY_JU=')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://www.shutterstock.com/image-photo/tasty-hawaiian-pizza-chicken-on-600w-2257266405.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
