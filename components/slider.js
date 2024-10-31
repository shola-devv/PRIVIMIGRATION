import {useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear as faGearThin, faHamburger, faPalette, faPeace, faYinYang } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserThin } from '@fortawesome/free-solid-svg-icons'
import { faPalette as faPaletteThin } from '@fortawesome/free-solid-svg-icons'
import { faYinYang as faYinYangThin } from '@fortawesome/free-solid-svg-icons'
import { faHamburger as faHamburgerThin } from '@fortawesome/free-solid-svg-icons'


const Slide = ()=>{

    ///A call from an Api
  // let userName = {props} 
  let userName = 'shola emmanuel'
  
  
    const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = ()=>{
   setIsOpen (!isOpen);
  
  };
  
  
  return (
  
   <div className='h-screen flex flex-col rounded-lg'>
    <div className='fixed top-0 left-0 w-full py-4 bg-white z-10 '>
     
    <div className='fixed top-0 left-0 w-full bg-white  text-xl font-bold text-center font-mono'>PRIVIMIGRATION</div>
   
   <div onClick={handleToggle}><FontAwesomeIcon icon={faHamburgerThin} className="w-16 h-10  text-lime-500"/></div> 


    </div>

    <div
    className= {` fixed top-0 left-0 h-screen w-64   bg-gray-800 text-white  p-4 transition-transform duration-300  ${
        isOpen ? 'translate-x-0' : '-translate-x-64'
    }`}

    > 
      <ul>
      <Link href='/profile'> <li className='pt-20 cursor-pointer'>Profile <FontAwesomeIcon className='text-white' icon={faUserThin} /></li></Link>
      <Link href='/settings'><li className='py-2 '>Settings <FontAwesomeIcon className='text-white' icon={faGearThin} /></li> </Link>
      <Link href='/about'><li className='py-2 cursor-pointer'>About <FontAwesomeIcon className='text-white' icon={faYinYangThin} /></li> </Link>
       <Link href='/Themes'><li className='py-2 cursor-pointer'>Theme <FontAwesomeIcon className='text-white' icon={faPaletteThin} /></li> </Link>
      </ul>

      <div className='flex justify-center pt-40 lg:pt-4 lg:-mb-third'>
<img
src="../bird.svg"
alt="oh, my bird"
className="lg:w-[36vw] md:w-[32vw] sm:w-56"
/>
</div>
    </div>

    <div
    className={`fixed bottom-0 left-0 w-full py-4 bg-white flex juatify-around ${isOpen ? 'hidden' : ""} `}
    >
      
    </div>
    
   </div>
  );


}

export default Slide