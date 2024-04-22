import hero_img from '../assets/hero_img.png';
import { FaXTwitter } from 'react-icons/fa6';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io5';

const Hero = () => (
  <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem] x:flex-col justify-between items-center flex mt-[5rem] '>
    <div className='flex flex-col x:text-center x:mb-[3rem]'>
      <div>
        <h5>Hi I am</h5>
        <h2 className='text-3xl mt-2'>
          Ekemini <span className='text-[#5E3BEE]'>Udongwo</span>
        </h2>
        <h1 className='mt-2'>Backend Developer</h1>
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

      <div className='flex mt-[3rem]'>
        <div className=''>
          <button className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'>
            Hire me
          </button>
        </div>
        {/* cv  */}
        <div className='ml-6'>
          <button className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE]  ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'>
            Download cv
          </button>
        </div>
      </div>
    </div>
    {/* image  */}
    <div>
      <img src={hero_img} alt='hero_image' className='w-[355px] x:w-[250px]' />
    </div>
  </div>
);

export default Hero;
