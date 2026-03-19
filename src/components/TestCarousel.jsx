// src/components/TestCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TestCarousel = () => {
  return (
    <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 500 }}>
      <SwiperSlide>
        <div style={{ background: 'red', height: '300px' }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: 'blue', height: '300px' }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: 'green', height: '300px' }}>Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestCarousel;
