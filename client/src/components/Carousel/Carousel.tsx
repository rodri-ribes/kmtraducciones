import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { type Project } from "../../interfaces/project";

import style from "./carousel.module.scss";
import "swiper/swiper-bundle.css";

import "./custom-carousel.scss";
import { SwiperOptions } from "swiper/types";
import { Modal } from "../Modal/Modal";
import { useState } from "react";


interface Props {
  array?: Project[];
  styleImage?: React.CSSProperties;
  styleCarousel?: React.CSSProperties;
  swiperOptions?: SwiperOptions;
}

export const Carousel = ({
  array,
  styleImage,
  styleCarousel,
  swiperOptions,
}: Props) => {

  const [modal, setModal] = useState<boolean>(false);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      className={style.container}
      style={styleCarousel}
      navigation={{
        enabled: true,
      }}
      breakpoints= {{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 25,
        }}
      }
    
      {...swiperOptions}
    >
      {array?.map(({image, title}, index) => (
        <SwiperSlide onClick={() => setModal(true)} key={index} className={style.container__wrapper}>
          <img
            onClick={() => {
              setModal(true);
            }}
            style={styleImage}
            src={image}
            alt={`Slide ${index + 1}`}
          />
          <div>
            <p>{title}</p>
            <button onClick={() => setModal(true)}>Ver Mas</button>
          </div>
        </SwiperSlide>
      ))}
      <Modal setOpen={setModal} open={modal} styleModal={style}>
        {() => (
          <div className={style.modal}>
            
          </div>
        )}
      </Modal>
    </Swiper>
  );
};
