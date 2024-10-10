import Link from 'next/link.js'

 const Front =()=>{

    let name = <h1 className='font-bold'>PRIVIMIGRATION</h1>
    let subheading1 = <h1 className='font-semibold  text-5xl py-4 px-8 '>Share your travel plans and thoughts</h1>
    let subheading2 = <h2 className=' w-200 font-light sm:text-xl lg:text-3xl px-8 pb-8 '>Share plans, Get immigration help, Speed <br></br>up your travels.enjoy a travel community</h2>
    

return (

<div className="p-6 relative font-mono">
    <div id='header' className='flex  shadow-blue-300 shadow-md ml-16 rounded-md'>
   <div className='pl-4 py-2  text-bold lg:text-xl text-blue-400' >{name}</div>
   <div id='buttons' className=' flex '>
   <div className='relative'><Link href='/Signup'> <button className=' relative border-4 bg-blue-200 border-blue-400 rounded-lg w-20 h-8 ml-32 lg:ml-50rem' >Sign-up</button></Link></div> 
   <div className='relative'><Link href='/Login'> <button className='border-4 bg-lime-200 border-lime-500 rounded-lg w-20 h-8  ml-4 mr-2 text-white text-bold ' >Log-in</button></Link></div> 
   </div>
    </div>  

<div className='ml-24'>

<div className='relative pt-20 lg:pt-20 lg:-mb-third'>
<img
src="../WorldLook.svg"
alt="touch the world"
className=" w-80 lg:w-[30vw] md:w-[38vw] "
/>
</div>

<div className='  absolute lg:ml-second lg:pb-20 '>
<div className='pl-4'>{subheading1}</div>
<div className=''>{subheading2}</div>
<div className=' pt-4'><Link href='/Signup'> <button className=' relative border-4 bg-lime-200 border-lime-500 rounded-lg w-40 h-10 ml-32 lg:ml-25rem animate-bounce loo' >Sign-up</button></Link></div>

</div>

</div>  

</div>

)

}
export default Front