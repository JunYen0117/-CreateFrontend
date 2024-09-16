import '../../styles/_frontpage.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function ProductRWD() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      ></Swiper>
    </>
  );
}
export default ProductRWD;
