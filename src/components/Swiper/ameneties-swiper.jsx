import React from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import baseball from "../../assets/baseball.svg"
import bike from "../../assets/bike.svg"
import bookshelf from "../../assets/bookshelf.svg"
import breakfast from "../../assets/breakfast.svg"
import group74  from "../../assets/Group 74.svg"
import group217  from "../../assets/Group 217.svg"
import spa from "../../assets/spa.svg"
import swimmingPool from "../../assets/swimming-pool.svg"

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./ameneties-swiper.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const AmenetiesSwiper = () => {
    const Icons=[
        {
            id:"1",
            icon: baseball
        },
        {
            id:"2",
            icon: bike
        },
        {
            id:"3",
            icon: bookshelf
        },
        {
            id:"4",
            icon: breakfast
        },
        {
            id:"5",
            icon: group74
        },
        {
            id:"6",
            icon: group217
        },
        {
            id:"7",
            icon: spa
        },
        
    ]

  return (
        <div className="row" style={{padding:"2% 10%",margin:"2% 10%"}}>
            <div className="col-lg-8">
                <Swiper
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true,}}
                    
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    >
                    
                        {
                            Icons.map(icon =>{
                                return(
                                    <SwiperSlide key={icon.id} className="swiper-slide">
                                        <img src={icon.icon} alt="icon" style={{padding :"2% 5%",margin:"2% 5%"}}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                   
                    
                    ...
                </Swiper>
            </div>
            
        </div>
    
  );
};

export default AmenetiesSwiper;