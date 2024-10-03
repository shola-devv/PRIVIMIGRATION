import Button from '../components/Button.jsx'
import Header from '../components/Header.jsx' 
import { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link.js';


 const Page = ()=>{
  //baba call useref later o
  let mr = useRef()
  let subheading1 = <h1 className='text-6xl font-thin'><span className='text-blue-400'>Share</span><span className='text-blue-400'> your </span><span className='text-lime-400'>immigration</span> <span className='text-blue-400'>plans</span> </h1>
   let subheading2 = <h2 className='text-2xl font-bold font-mono'>Share plans, Get immigration help, Speed up your travels.</h2>
    return (
      <>
        <Header/>
          <div className='all'>
     

    <div className=' flex items-center justify-center font-mono'>{subheading1}</div>  
    <div className=' flex items-center justify-center m-16 z-20'>{subheading2}</div>  
    
 
<div className='my-20'><Link href='/Signup'><Button name='sign up' style='butt2' /></Link></div>

<div className='look pt-8'>
<Image src="../WorldLook.svg"
              alt="Vercel Logo"
              width={400}
              height={34}
              priority />
</div>

</div>
       </> 
    )
} 
export default Page



 