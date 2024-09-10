import Button from '../components/Button.jsx'
import Header from '../components/Header.jsx' 
import { useRef } from 'react';
import Image from "next/image";



 const Page = ()=>{
  //baba call useref later o
  let mr = useRef()
   let subheading1 = <h1 className='firsty'>Share your immigration plans </h1>
   let subheading2 = <h2 className='secondy'>share plans,get immigration help, speed up your travels.</h2>
    return (
      <>
      <div className='globe'>

<div className='all'>
      <Header/> 
      <Image src="../worldGlobe.svg"
              alt="Vercel Logo"
              width={230}
              height={64}
              priority />
</div>
      {subheading1}
      {subheading2}
 
 
<Button name='sign up' style='butt2'/>

<div className='look'>
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