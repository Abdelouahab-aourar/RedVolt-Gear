import airbuds from '../assets/airbuds.png';
import hdd from '../assets/hdd.png';
import headset from '../assets/headset.png';
import keyboard from '../assets/keyboard.png';
import mouse from '../assets/mouse.png';
import smartWatch from '../assets/smart-watch.png';
import Products from '../Products/Products';
import styles from './Slides.module.css';
import type { ProductProps } from '../Products/Products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
interface ProductListProps {
  onAddToCart: (product: ProductProps) => void;
}
function Slides({ onAddToCart }: ProductListProps){
    return(
        <>
        <h1 className={styles.OurProducts}>Our Products</h1>
        <div className={styles.container}>
         <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={2}
        breakpoints={{
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1, // for screen width <= 1200
        },
        1201: {
          slidesPerView: 2,
        },
          }}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.slide}>
          <Products title="Wireless Earbuds" image={airbuds} onAddToCart={onAddToCart}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Products title="1TB External Hard Drive" image={hdd} onAddToCart={onAddToCart} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Products title="Wireless Gaming Headset" image={headset} onAddToCart={onAddToCart} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Products title="Wired Gaming Keyboard" image = {keyboard} onAddToCart={onAddToCart}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Products title="Razer Basilisk Gaming Mouse" image = {mouse} onAddToCart={onAddToCart}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <Products title="Smart Watch" image = {smartWatch} onAddToCart={onAddToCart}/>
        </SwiperSlide>
      </Swiper>
        </div>
        </>
    );
}
export default Slides;