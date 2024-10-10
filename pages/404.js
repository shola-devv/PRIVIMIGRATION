import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Head from "next/head"

 const Notfound  = ()=>{

  const route = useRouter();
useEffect(()=>{
setTimeout(()=>{
route.push('/')
}, 17000)
}, )
 

return (
  <>
   <Head>
      <title>Error 404</title>
      <meta keywords='gbhnm'></meta>
    </Head> 
    <div className= 'flex-col pl-28 pt-80 pb-20 lg:pt-40 bg-lime-300 rounded-lg lg:mx-80 lg:my-40 lg:text-5xl lg:text-bold font-mono'>
       <div className="lg:flex-row justify-between items-center lg:pl-80">
    <span className='text-5xl py-8 px-6 animate-ping '>😥😥</span>
  <h1 className=' text-bold pt-8'>Error 404</h1>
       
  
  <h2 className='py-4'>This page could not be found</h2>
  <h2 className="lg:text-3xl md:text-xl">Go back to the <Link className= "text-blue-400" href="/">Homepage</Link></h2>
  </div>
    </div>
 </>
)

} 
export default Notfound;