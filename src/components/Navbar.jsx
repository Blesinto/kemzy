import { navLinks } from '../constraint';
import logo from '../assets/kemzy_logo.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [Sticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const whatsapp = () => {
    window.location.href = 'https://wa.me/+2349038306057';
  };
  return (
    <div className='ps-[8rem] pe-[8rem] x:pe-[2rem] x:ps-[2rem]'>
      <nav className={`w-full  flex justify-between items-center ${Sticky?'fixed bg-[#121212] top-0 z-[1000]  py-2 justify-around left-0 ':''}`}>
        {/* logo  */}
        <div>
          <img src={logo} alt='' className='w-[80px]' />
        </div>
        {/* navlinks  */}
        <div>
          <ul className='flex'>
            {navLinks.map(nav => (
              <li key={nav.id} className='p-4 x:hidden relative'>
                <a href={`#${nav.id}`}>{nav.title}</a>
                <div className='absolute top-0 left-0 right-0 h-1 bg-transparent transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 bg-red-500'></div>
              </li>
            ))}
          </ul>
        </div>

        {/* hire me  */}
        <div>
          <button
            className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'
            onClick={whatsapp}
          >
            Hire me
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
