import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../components/navbar.js';
import Link from 'next/link';

// <Navbar />
export default function  About(){

 return(
        
        <div className={styles.body}>
           
        <h1 className={styles.about}> About the app</h1>
        <div className={styles.story}>
         <p>   &nbsp;  &nbsp;.   </p>
         <p>&nbsp;&nbsp;&nbsp;Feautures :</p>
            <ol className={styles.boom}>
            <li>- Real </li>
           <li> - A user-friendly interface: privimigation user friendly interface makes navigating it a breeze, ensuring a seamless experience for everyone.</li> 
         </ol>
        </div>


        <h1 className={styles.about}> About the developer</h1>
       <div className={styles.story}>
        <p>&nbsp;  &nbsp; Hi there! im  Emmanuel </p>
        <p>&nbsp;&nbsp;Reach out to me <Link className='text-blue-500' href='https://x.com/0xfeMMANUEL'>here</Link>.</p>
        </div>
        </div>
    )
}