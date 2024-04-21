import { navLinks } from '../constraint';

const Navbar = () => {
  return (
    <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem]'>
      <nav className=' w-full mt-4 flex justify-between items-center'>
        {/* logo  */}
        <div>
          <h1>Kemzy</h1>
        </div>
        {/* navlinks  */}
        <div>
          <ul className='flex '>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className='p-4 x:hidden'>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* hire me  */}
        <div>
          <button className='bg-[#5E3BEE]  hover:bg-white hover:text-[#5E3BEE]  ps-4 pe-4 py-2 text-white rounded-lg text-[12px]'>
            Hire me
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
