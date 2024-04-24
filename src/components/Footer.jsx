import { FaXTwitter } from 'react-icons/fa6';
import { ImWhatsapp } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { VscCallIncoming } from 'react-icons/vsc';

const Footer = () => (
  <div className='ps-[5rem] pe-[5rem] x:pe-[2rem] x:ps-[2rem] mt-[5rem]'>
    <footer className='grid-rows-5 grid items-center text-center justify-center '>
      <div>
        <a href='#'>logo</a>
      </div>
      <div>
        <ul className='text-[#7B7583] text-[14px]  flex'>
          <li>
            <a href='#'>Home</a>
          </li>

          <li className='ml-4'>
            <a href='#'>Service</a>
          </li>

          <li className='ml-4'>
            <a href='#'>About me</a>
          </li>

          <li className='ml-4'>
            <a href='#'>Portfolio</a>
          </li>

          <li className='ml-4'>
            <a href='#'>Contact me</a>
          </li>
        </ul>
      </div>
      {/* icons  */}
      <div className='flex items-center justify-center'>
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
      <div className='text-[13px] grid grid-rows-1'>
        <div  className='flex items-center'>
          <MdOutlineEmail />
          <a href='#' className='ml-2 mr-2'>Mahmood.fazile7005@gmail.com</a>
          <VscCallIncoming/>
          <span  className='ml-2' >+234 8029675272</span>
        </div>
      </div>
      <hr />
      <div className='text-[13px]'>design by @Blesiinto</div>
    </footer>
  </div>
);

export default Footer;
