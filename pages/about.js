import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../components/navbar.js';
import Link from 'next/link';
import Header from '../components/Header.jsx'



// <Navbar />
export default function  About(){

//https://x.com/0xfeMMANUEL

 return(
  <div>
        <Header/>

        <div>
          
          <h1>
            <p>THE APP</p>
          </h1>
          
          <h1>
            <p>THE DEV</p>
          </h1>
          
          
         </div>


  </div>
    )
}