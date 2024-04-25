import hero_img from '../assets/hero_img.png';
import { FaXTwitter } from 'react-icons/fa6';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io5';
import resume from '../assets/Resume.pdf';

const cv = () => {
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'resume.pdf';
  link.click();
};
const whatsapp = () => {
  window.location.href = 'https://wa.me/+2349038306057';
};

const Hero = () => {


  return(
  <div className='ps-[10rem] pe-[10rem] x:pe-[2rem] x:ps-[2rem] x:flex-col justify-between items-center flex mt-[5rem] '>
    <div className='flex flex-col x:text-center x:mb-[3rem]'>
      <div>
        <h5>Hi I am</h5>
        <h2 className='text-3xl'>
          Ekemini <span className='text-[#5E3BEE]'>Udongwo</span>
        </h2>
        <h1 className=''>Backend Developer</h1>
      </div>
      {/* icons  */}
      <div className='flex items-center x:justify-center  mt-4'>
        <a href='#'>
          <IoLogoInstagram />
        </a>
        <a href='#'>
          <ImWhatsapp className='ml-2' />
        </a>
        <a href='#'>
          {' '}
          <FaXTwitter className='ml-2' />
        </a>
      </div>

      <div className='flex x:justify-center x:items-center mt-[1rem]'>
        <div className=''>
          <button
            className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'
            onClick={whatsapp}
          >
            Hire me
          </button>
        </div>
        {/* cv  */}
        <div className='ml-6'>
          <button
            className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE]  ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'
            onClick={cv}
          >
            Download cv
          </button>
        </div>
      </div>
      {/* experience  */}
      <div className='flex mt-6 text-[13px] text-center'>
        <div className='mr-4 '>
          <h3 className='text-[#5E3BEE]'>5+</h3>
          <h5>experience</h5>
        </div>
        <div>
          <h3 className='text-[#5E3BEE]'>20+</h3>
          <h5>Project done</h5>
        </div>
        <div className='ml-4'>
          <h3 className='text-[#5E3BEE]'>80+</h3>
          <h5>Happy clients</h5>
        </div>
      </div>
    </div>
    {/* image  */}
    <div className='relative overflow-hidden'>
      <img
        src={hero_img}
        alt='hero_image'
        className='w-[355px] x:w-[250px] animate-float'
      />
    </div>
  </div>
  )
};

export default Hero;
