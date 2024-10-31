import Image from "next/image"
import Header from '../components/Header.jsx'
import { useState, useEffect } from "react"
import Link from "next/link.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear as faGearThin} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft as faArrowLeftThin  } from '@fortawesome/free-solid-svg-icons'




   const Settings = ()=>{

    const [darkMode, setDarkMode] = useState(undefined)
    
    const switchMode = () =>{
        setDarkMode(!darkMode);
    };
    
    useEffect(()=>{
    
        if (darkMode){
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add("dark");
        } else if (darkMode === false){
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark");
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true");
        }
    
    
    }, [darkMode])
    
    
    

return(
 
    <div className='px-2  py-16 md:m-20 xl:mx-96 '>
    <Link href='/Home'><h1><FontAwesomeIcon icon={faArrowLeftThin} /></h1></Link> 
     <div>
     <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4 '>     SETTINGS <FontAwesomeIcon className='text-black' icon={faGearThin} /></h1>
     
     </div>
    <div className='flex justify-center w-76  h-screen rounded-xl '>
   
     <ol>
     <Link href='/profile'><li>Profile settings</li></Link> 
     <Link href='/Themes'><li>Theme</li></Link> 
      <div><li>Logout</li></div>


     </ol>

    <div className='flex justify-center fixed bottom-0 lg:pt-40 '>
     <img
   src="../bird.svg"
   alt="oh, my bird"
   className="lg:w-[16vw] md:w-[24vw] sm:w-24"
   />
   </div>
     </div>
     
    
     
   
    </div>

)

  }

  export default Settings