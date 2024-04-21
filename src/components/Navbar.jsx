import { navLinks } from '../constraint';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='flex justify-between items-center'>
        {/* logo  */}
        <div>
          <h1>Kemzy</h1>
        </div>
        {/* navlinks  */}
        <div>
          <ul className='flex'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className='p-4'>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* hire me  */}
        <div>
            <button>Hire me</button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
