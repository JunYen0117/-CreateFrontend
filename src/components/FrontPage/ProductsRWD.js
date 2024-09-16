// import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function ProductsRWD(props) {
  const { datas, on_phone, Comp } = props;
  return (
    <>
      <Swiper
        spaceBetween={3}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map((Productdatas, index) => {
          const a = index === 0 ? 'active' : '';
          return Productdatas.map((content) => (
            <SwiperSlide>
              <Comp
                // key={content.product}
                {...content}
                on_phone={on_phone}
              />
            </SwiperSlide>
          ));
        })}
      </Swiper>
    </>
  );
}

export default ProductsRWD;
