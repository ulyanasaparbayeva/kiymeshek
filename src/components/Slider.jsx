'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useState} from "react";
import ClientComponent from "./ClientComponent";
import pattern from "../images/pattern.svg";
import {v4 as uuidv4} from "uuid";
import { Pagination } from 'swiper/modules';
import Reviews_1 from "../images/Reviews_1.jpg";
import Reviews_2 from "../images/Reviews_2.jpg";

import 'swiper/css';
import 'swiper/css/pagination';


export const Slider = () => {
  const [swiper, setSwiper] = useState({
    slideNext: () => {
    }, slidePrev: () => {
    }
  })

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  const testimonials = [
    {
      img: Reviews_1,
    },
    {
      img: Reviews_2,
    },
    {
      img: Reviews_1,
    },
    {
      img: Reviews_2,
    },
    {
      img: Reviews_1,
    },
    {
      img: Reviews_2,
    },
  ]


  return (
    <ClientComponent>
      <div className="font-abc">
        <div className="flex items-center justify-center gap-7 pt-custom-top-11">
          <div className="border-[1px] border-secondary-9 w-custom-width-4"></div>
          <img src={pattern}/>
          <div className="text-center text-black text-3xl font-semibold">Reviews</div>
          <img src={pattern}/>
          <div className="border-[1px] border-secondary-9 w-custom-width-4"></div>
        </div>
        <div className="text-black text-center font-light text-custom-size-45 pt-custom-top-8 container">
          Our unparalleled customer service, the superior quality of our offerings, or the transformative impact we have had on our customers' lives. </div>
      </div>
      <section className="relative pt-custom-top-8 font-abc bg-white">
        <div className="relative">
            <div className="relative sm:overflow-hidden">
              <div className="relative ">
                <div className={'mx-auto container'}>
                  <Swiper
                    className="w-custom-width-5  m-auto my-custom-swiper"
                    pagination={{ clickable: true }}
                    autoplay={true}
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(s) => {
                      setSwiper(s);
                    }}
                  >
                    {testimonials.map((testimonial, index) => (<SwiperSlide key={uuidv4()}
                    className="">
                      <div className="bg-swipers">
                        <img width="1160" height="542" src={testimonial.img}
                             className="w-full max-w-none  text-center m-auto sm:max-w-none
                             flex justify-center"
                             alt="..."
                             loading="lazy"/>
                        <div className="pt-custom-top-8"></div>
                      </div>
                    </SwiperSlide>))}
                  </Swiper>
                  <div className="pb-custom-top-8"></div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </ClientComponent>
  );
};
