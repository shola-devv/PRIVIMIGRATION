//import Hamburger from './Hamburger.jsx' <Hamburger/> 
import Button from './Button.jsx'
import Image from 'next/image.js'
import Link from 'next/link.js'

const Header = ()=>{
    let title = <h1 className='text-xl  md:text-2xl font-bold text-blue-400 font-mono'>privimigration</h1>
    return( 
        <div className='flex flex-col md:flex-row justify-between items-center py-2 px-6 md:px-6 bg-white shadow-blue-300 shadow-md rounded-lg'>
        <div className='flex items-center mb-4 md:mb-0'>
            
        <div className='flex items-center '>
            

            <Image src="../worldGlobe.svg"
                    alt="Vercel Logo"
                    width={40}
                    height={50}
                    priority 
                     />
                    <div className='ml-3 md:ml- 20'> {title}</div>
                   
                    </div>

              <div className='flex space-x-2'>
       <Link href='/Login'><Button style='butt3' name='login'/></Link> 
       <Link href='/Signup'><Button style='butt4' name='sign up'/></Link> 
        </div>
        </div>
        </div>
    )
}
export default Header