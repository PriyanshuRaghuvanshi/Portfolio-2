import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/logii.png' 
import AVTR2 from '../../assets/coding.jpg' 
import AVTR3 from '../../assets/coding1.png' 

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar: AVTR1,
    name:'React Frontend Intern',
    review:' I Worked as React.js frontend intern at a small startup named "Sashree infotech" during May-August2021 ',
  },
  {
    avatar: AVTR2,
    name:'TOP 3 in PAN India Hackathon',
    review:'Secured top 3 amoung Blockchain category in INNOHACKS(Hackathon)',
  },
  {
    avatar: AVTR3,
    name:'Web Development Intern',
    review:'Also worked as web development intern with TwoWaits during Nov-December 2021 ',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='test'>
      <h5>Work Experience</h5>
      <h2>Internships/Achievments</h2>

      <Swiper className='container testimonials__container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}  
       pagination={{ clickable: true }}
      >

        {
          data.map(({avatar,name,review},index)=>{
            return(
            <SwiperSlide key={index}  className='testimonial'>
            <div className='client__avatar'>
                <img src={avatar} alt='logo'/>                
            </div>
            <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
          </SwiperSlide>
            )
          })
        }
          
      </Swiper>
    </section>
  )
}

export default Testimonials