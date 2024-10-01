
import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../components/navbar.js';
import Link from 'next/link';

// <Navbar />
export default function  Login(){
 
 return(
        
        <div className='{styles.body} overflow-hidden'>
           
        <div className='bg-slate-200 rounded-xl p-20 sm:p-6 md:p-10 xl:20px'>
          <h1 className='mx-auto my-auto  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl  font-bold'>     PRIVIMIGRATION</h1>
          <h2 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold'>LOGIN</h2>
         <form>
         <label>Username:</label>
        <input type='text' className='border-4 border-slate-400 rounded-lg w-80 h-12' ></input><br></br>
          <label>password:</label>
          <input type='password' className='border-4 border-slate-400 rounded-lg w-80 h-12 m-8 mx--16' ></input> <br></br>
          <input type ='submit' value='       LOGIN' className=' border-4 border-blue-400 cursor-pointer bg-blue-200 rounded-md h-12 w-32 m-6'></input>

         </form>
         <h1> dont have an account yet? <Link className='text-blue-700'href='/Login'>SignUp</Link></h1>
        </div>
       </div>
        )}