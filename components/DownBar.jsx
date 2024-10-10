
import Button from './Button.jsx'
import Image from 'next/image.js'
import Link from 'next/link.js'

const Header = ()=>{
    let title = <h1 className='text-xl  md:text-2xl font-bold text-blue-400 font-mono'>privimigration</h1>
    let name = <h1 className='font-bold'>PRIVIMIGRATION</h1>

    return( 
        <div className="p-6 relative font-mono">
            
            <div id='header' className='flex  shadow-blue-300 shadow-md ml-16 rounded-md'>
            <div>
            <img src='../aircraft.svg'
             className=" w-20 lg:w-[30vw] md:w-[38vw] "
            />
            </div>

            <div className='pl-4 py-2  text-bold lg:text-xl text-blue-400' >{name}</div>
            
  
   </div>
   </div>         
        
    )
}
export default Header