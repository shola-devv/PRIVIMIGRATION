import Image from 'next/image'
import Link from 'next/link';
//import { useState } from 'react';


const NavBar =()=>{
 // const [navBar, setNavbar] = useState()
    return(
        <div>
<nav className='w-full bg-slate-950 fixed top-0 left-0 right-0 z-10'>
<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
    <div>
        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
<Link href={"/"}>
    <h2 className='text-2xl text-white'>
        <Image 
        src="./components/logo.svg"
        height={30}
        width={30}
        alt='logo'
       />

    
    </h2>
</Link>
    <div className='md:hidden'></div>
    <button className='text-white'>
        click</button>

        </div>
    </div>
</div>

</nav>
        </div>
    )
}

export default NavBar