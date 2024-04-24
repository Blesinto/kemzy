import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { MdArrowOutward } from 'react-icons/md';
import prof1 from '../assets/img_1.png';
import prof2 from '../assets/img_2.png';
import prof3 from '../assets/img_3.png';

const project = [
  {
    img: prof1,
    title: 'Steps Jobs',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    img: prof2,
    title: 'Andry Moray',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    img: prof3,
    title: 'Zaid Ed',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
];

const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const github = () => {
    window.location.href = 'https://github.com/Kemzzy-Dev';
  };

  return (
    <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem] mt-[10rem]'>
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
      <div className='flex items-center mt-[5rem] cursor-pointer x:flex-col '>
        {project.map(({ id, img, title, descr },index) => (
          <div
            key={id}
            className='bg-opacity-[4%] bg-[#FFFFFF] m-2 p-4 rounded-lg'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ transform: hoveredIndex === index? 'scale(1.1)' : 'none', transition: 'transform 0.3s ease-in-out' }}
          >
            <img src={img} alt={title} className='w-[320px]' />
            <h3 className='mt-4'>{title}</h3>
            <p className='w-[95%] mb-4 text-[13px] mt-4'>{descr}</p>
            <div className='flex items-center'>
              <a href='#'>View project</a>
              <MdArrowOutward />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
