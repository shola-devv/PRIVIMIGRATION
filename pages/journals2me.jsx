import Button from '../components/Button.jsx'
import Header from '../components/Header.jsx' 
import { useRef } from 'react';
import Image from "next/image";
import styles from '../styles/jstyle.module.css'


 const Page = ()=>{
  //baba call useref later o
  let mr = useRef()
   let subheading1 = <h1 className={styles.firsty}>Share your immigration plans </h1>
   let subheading2 = <h2 className={styles.secondy}>share plans,get immigration help, speed up your travels.</h2>
    return (
      <>
      <div id='head'>
        <Header/>
          <div className={styles.all}>
     

      {subheading1}
      {subheading2}
 
 
<Button name='sign up' style={styles.butt2}/>

<div className={styles.look}>
<Image src="../WorldLook.svg"
              alt="Vercel Logo"
              width={400}
              height={34}
              priority />
</div>

</div>
</div>
       </> 
    )
} 
export default Page