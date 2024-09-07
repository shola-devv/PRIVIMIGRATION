import Button from '../components/Button.jsx'
import Header from '../components/Header.jsx' 
import { useRef } from 'react';

 const Page = ()=>{
  //baba call useref later o
  let mr = useRef()
   let subheading1 = <h1 className='firsty'>Share your immigration plans </h1>
   let subheading2 = <h2 className='secondy'>share plans,get immigration help, speed up your travels.</h2>
    return (
      <>
<div className='all'>
      <Header/> 
      {subheading1}
      {subheading2}
 
 
<Button name='sign up' style='butt2'/>
</div>
       </> 
    )
} 
export default Page