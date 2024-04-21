import hero_img from "../assets/hero_img.png"
const Hero = () => (
  <div className='ps-[5rem] pe-[5rem] justify-between items-center flex mt-[5rem] '>
    <div className="flex flex-col">
      <h5>Hi I am</h5>
      <h2>Mahmood Fazile</h2>
      <h1>Backend Developer</h1>
    </div>
    {/* image  */}
    <div>
        <img src={hero_img} alt="hero_image" className="w-[355px]" />
    </div>
  </div>
);

export default Hero;
