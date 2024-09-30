import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../components/navbar.js';
import Link from 'next/link';

// <Navbar />
export default function  Signup(){

 return(
        
        <div className={styles.body}>
           
        <div>
          <h1 className='mx-auto my-auto  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl  '>     PRIVIMIGRATION</h1>
          <h2 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>SIGNUP</h2>
         <form>
         <label>Username:</label>
          <input type='text' className='border-4 border-slate-400 rounded-lg w-80 h-12' ></input><br></br>
          <label>password</label>
          <input type='password' className='border-4 border-slate-400 rounded-lg w-80 h-12 m-8' ></input><br></br>
          <input type ='submit' className=' border-4 border-blue-400 cursor-pointer bg-blue-200 rounded-md h-12 w-32 m-6'></input>

         </form>
         <h1> already have an account? <Link className='text-blue-700'href='/Login'>login</Link></h1>
        </div>
        </div>
    )
}