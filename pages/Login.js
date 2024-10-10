import Link from "next/link";


 const Login =()=>{



return(

  <div className='px-10 py-16 md:m-20 xl:mx-96 font-mono'>
   <div>
   <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4 text-blue-400 font-mono '>PRIVIMIGRATION</h1>
   <h2 className=' flex justify-center  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold p-4  text-blue-400 font-mono'>LOGIN</h2>
   </div>
  <div className='flex justify-center w-76  h-80 bg-blue-100 rounded-xl'>
  
  <form>

<div className='pb-4 pt-4 px-4'>
<div className='py-4'>
<label className=' font-semibold'>  Email:</label>
</div>
<input type='text' className='border-4  border-slate-300 rounded-lg w-64 h-12 ' ></input><br></br>
</div>

<div className='pb-4 pl-4'>
  <div className='py-4'>
    <label className=' font-semibold'>Password:</label>
  </div>

<input type='password' className=' border-4  border-slate-300 rounded-lg w-64 h-12 ' ></input><br></br>
</div>


<div className='flex justify-center'>  <input type ='submit' value='LOGIN' className=' relative border-4 bg-blue-200 border-blue-400 rounded-md w-20 h-8 m-2 cursor-pointer' ></input></div>
</form>

   </div>
   <p><Link href='/' className="text-blue-600">forgot password?</Link></p>
   <h2>Dont have an account? <Link href='/' className="text-blue-600">Signup</Link></h2>
   <div className='flex justify-center pt-40 lg:pt-4 lg:-mb-third'>
<img
src="../WorldGlobe.svg"
alt="oh, my bird"
className="lg:w-[36vw] md:w-[32vw] sm:w-56"
/>
</div>
  </div>



)


 }

 export default Login