import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ava1 from '../assets/ava_1.png';
import ava2 from '../assets/ava_2.png';
import ava3 from '../assets/ava_3.png';
import { HiOutlineStar } from 'react-icons/hi';

const Carousel = () => {
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
        breakpoint: 768, // Apply settings below this screen width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='ps-[8rem] pe-[8rem] x:pe-[2rem] x:ps-[2rem] mt-[5rem] x:mt-[5rem]'>
      <div>
        <h3>Clients Feedback</h3>
        <h1>Customer testimonials</h1>
      </div>
      <div className='slider-container mt-[5rem]'>
        <Slider {...settings}>
          <div className=' p-4 mr-4 w-0 '>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava1} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
          {/* second  */}
          <div className=' p-4 mr-4 w-[300px]'>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava2} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
          {/* third  */}
          <div className=' p-4 scroll-mr-48 w-[300px]'>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava3} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
          {/* four */}
          <div className='  mr-4 p-4 '>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava1} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
          {/* five  */}
          <div className=' mr-4 p-4 '>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava1} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
          {/* six  */}
          <div className=' mr-4 p-4'>
            <div className='flex'>
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
              <HiOutlineStar />
            </div>
            <p className='text-[11px] w-[250px] mt-4'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`}</p>
            {/* author */}
            <div className='flex items-center mt-4'>
              <div>
                <img src={ava1} alt='' className='w-[30px]' />
              </div>
              <div className='text-[11px] ml-4'>
                <h1>Dianne Russell</h1>
                <h4>Starbucks</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
