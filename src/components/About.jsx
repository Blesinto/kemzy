import about_img from '../assets/about.png';

const About = () => (
  <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem] mt-[5rem] x:mt-[5rem]'>
    <div className='flex flex-col justify-center items-center text-center'>
      <div>
        {' '}
        <h1>About Me</h1>
      </div>
      <div className='x:w-[300px]'>
        <p>User Interface and User Experience and Also video editing </p>
      </div>
    </div>
    {/* content  */}
    <div className='flex justify-between x:flex-col mt-[5rem] x:m-auto x:pr-0 x:text-center x:justify-center items-center'>
      <div className='x:max-w-[70%] x:mt-[5rem] relative overflow-hidden'>
        <img src={about_img} alt='about_img' className='w-[355px] x:w-[250px] animate-float' />
      </div>
      <div className='w-[350px] x:w-[300px] x:text-[13px] x:mt-[5rem]'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos placeat
          ex mollitia, non odio dolorem omnis eligendi, iure voluptas modi ab,
          harum pariatur sint impedit enim? Neque animi sequi dicta!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos placeat
          harum pariatur sint impedit enim? Neque animi sequi dicta!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos placeat
          
        !
        </p>
        <div className='mt-6'>
          <button className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE]  ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'>
            Download cv
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default About;
