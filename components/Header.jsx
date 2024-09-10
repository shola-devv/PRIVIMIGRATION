//import Hamburger from './Hamburger.jsx' <Hamburger/> 
import Button from './Button.jsx'

const Header = ()=>{
    let title = <h1>privimigration</h1>
    return( 
        <div className='div'>
        {title}
        
        <Button style='butt3' name='login'/>
        <Button style='butt4' name='sign up'/>
        </div>
    )
}
export default Header