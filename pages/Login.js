
import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../components/navbar.js';
import Link from 'next/link';

// <Navbar />
export default function  Login(){
 
 return(
        
  <div className='mt-12'>
           
  <div className='mx-auto my-auto bg-slate-200 rounded-xl p-20 sm:p-6 md:p-10 xl:20px'>
    <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl p-8 xl:text-3xl 2xl:text-3xl  font-bold p-4'>     PRIVIMIGRATION</h1>
    <h2 className=' flex justify-center  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold p-4'>LOGIN</h2>
   <form>
   <div className='py-4'>
  <label className='pr-6'>password:</label>
  <input type='text' className='border-4 border-slate-400 rounded-lg w-80 h-12 ' ></input><br></br>
  </div>

  <div className='py-4'>
  <label className='pr-6'>username:</label>
  <input type='password' className='border-4 border-slate-400 rounded-lg w-80 h-12 ' ></input><br></br>
  </div>

 <div className='flex justify-center'>  <input type ='submit' value='LOGIN' className=' border-4 border-blue-400 cursor-pointer bg-blue-200 rounded-md h-12 w-32 m-6 font-bold'></input></div>
   </form>
   <h1 className='flex justify-center'> already have an account?  <Link className='text-blue-700'href='/Login'>   sgnup</Link></h1>
  </div>
 </div>
        )}