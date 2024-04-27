import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { GoArrowRight } from 'react-icons/go';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prof1 from '../assets/img_1.png';
import prof2 from '../assets/img_2.png';
import prof3 from '../assets/img_3.png';

const project = [
  {
    img: prof1,
    title: 'Portfolio Website UI',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    img: prof2,
    title: 'Portfolio Website UI',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    img: prof3,
    title: 'Portfolio Website UI',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const github = () => {
    window.location.href = 'https://github.com/Kemzzy-Dev';
  };

  return (
    <div className='ps-[8rem] pe-[8rem] x:pe-[2rem] x:ps-[2rem] mt-[10rem]'>
      <div className=' flex justify-between items-center'>
        <div>
          <h6 className='text-[12px]'>Recent Projects</h6>
          <h1 className='text-2xl x:text-sm'>My Portfolio</h1>
        </div>
        <div className='flex items-center bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg '>
          <SiGithub />
          <button className='ml-2 x:text-[12px]' onClick={github}>
            Visit My Github
          </button>
        </div>
      </div>
      {/* projects */}
      <Slider {...settings}>
        {project.map(({ img, title, descr }, index) => (
          <div
            key={index}
            className='bg-opacity-[4%] bg-[#FFFFFF] m-2 p-4 rounded-lg slider-container'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === index ? 'scale(1.1)' : 'none',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <img src={img} alt={title} className='w-[320px]' />
            <h3 className='mt-4'>{title}</h3>
            <p className='w-[75%] mb-4 text-[13px] mt-4'>{descr}</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <a href='#' className='text-[13px]'>
                  View code
                </a>
                <GoArrowRight />
              </div>
              <div>
                <button className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'>
                  <a href='#'>Live Preview</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
