import airbuds from '../assets/airbuds.png'
import hdd from '../assets/hdd.png'
import headset from '../assets/headset.png'
import keyboard from '../assets/keyboard.png'
import mouse from '../assets/mouse.png'
import smartWatch from '../assets/smart-watch.png'
import Products from '../Products/Products'
import styles from './Slides.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slides(){
    return(
        <div className={styles.container}>
            <h1 className={styles.OurProducts}>Our Products</h1>
         <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Products title="Wireless Earbuds" image={airbuds} />
        </SwiperSlide>
        <SwiperSlide>
          <Products title="1TB External Hard Drive" image={hdd} />
        </SwiperSlide>
        <SwiperSlide>
          <Products title="Wireless Gaming Headset" image={headset} />
        </SwiperSlide><SwiperSlide>
          <Products title="Wired Gaming Keyboard" image = {keyboard}/>
        </SwiperSlide><SwiperSlide>
          <Products title="Razer Basilisk Gaming Mouse" image = {mouse}/>
        </SwiperSlide>
        <SwiperSlide>
        <Products title="Smart Watch" image = {smartWatch}/>
        </SwiperSlide>
      </Swiper>
        </div>
    );
}
export default Slides;