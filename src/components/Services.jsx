import { service } from '../constraint';
import { SiPython } from 'react-icons/si';

const Services = () => (
  <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem] mt-[5rem] x:mt-[5rem]'>
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='mb-2'>
        {' '}
        <h1>Services</h1>
      </div>
      <div className='x:w-[300px]'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam{' '}
        </p>
      </div>

      {/* service  */}
      <div className='grid-cols-3 grid mt-8  x:grid-cols-1 '>
        {service.map(({ id, title, desc }) => (
          <div
            key={id}
            className=' bg-[#FFFFFF] transition-colors hover:bg-white hover:text-[#5E3BEE] cur bg-opacity-[4%] p-4 m-2 flex-col item-center justify-center rounded-[20px]  '
          >
            <div>
              <SiPython className='text-[2rem] m-auto mt-4   ' />
            </div>
            <div>
              <h2 className='mt-4 text-[#5E3BEE] font-bold text-base  '>
                {title}
              </h2>
              <p className='mt-4 max-w-[11rem] h-[5rem] text-[12px] hover:text-[#5E3BEE]  '>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
