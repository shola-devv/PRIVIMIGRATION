//import Hamburger from './Hamburger.jsx' <Hamburger/> 
import Button from './Button.jsx'
import Image from 'next/image.js'

const Header = ()=>{
    let title = <h1 className='small'>privimigration</h1>
    return( 
        <div className='div'>
            <div >
      <Image src="../worldGlobe.svg"
              alt="Vercel Logo"
              width={50}
              height={70}
              priority />
              </div>
        {title}
        
        <Button style='butt3' name='login'/>
        <Button style='butt4' name='sign up'/>
        </div>
    )
}
export default Header