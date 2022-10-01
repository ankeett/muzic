import {useState} from 'react'
import { NavLink} from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri'
import { links } from '../assets/constants';
import {logo} from '../assets';

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   return(
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
        <img src={logo} alt="logo" className='w-full h-25' />
      </div>
    </>
   )
   };

export default Sidebar;
