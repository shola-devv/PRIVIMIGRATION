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
}, 12000)
}, )
 

return (
  <>
   <Head>
      <title>Error 404</title>
      <meta keywords='NOT-FOUND'></meta>
    </Head> 
    
   

<div className='px-10 py-16 md:m-20 xl:mx-96 '>
 <div>

 <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4 font-mono '>     PRIVIMIGRATION</h1>
  <div className='flex justify-center pt-6 lg:pt-4 lg:-mb-third '>
  <img
  src="../aircraft.svg"
alt="oh, my bird"
className="lg:w-[36vw] md:w-[32vw] sm:w-56 animate-bounce "
/>  
</div>  
 </div>
<div className=' justify-center w-76  h-76 bg-slate-100 rounded-xl'>
  <div className='px-16 py-10'>
  <h1 className="font-extrabold font-mono">404 ERROR</h1>
  <p>Page could not be found</p>
 <Link href='/'> <p className='text-blue-700'>Click here to return home</p></Link> 
 </div>
 </div>
 

 
</div>


 </>
)

} 
export default Notfound;