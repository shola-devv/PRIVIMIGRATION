import Slide from "/components/Slider.js"
import { faCoffee, faHeart, faHomeAlt, faKiwiBird, faPencilSquare, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserThin } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarThin } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartThin } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane as faPaperPlaneThin } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeThin } from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellThin } from '@fortawesome/free-solid-svg-icons'
import { faComment as faCommentThin } from '@fortawesome/free-solid-svg-icons'
import { faHome as faHomeThin } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown as faThumbsDownThin } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as faThumbsUpThin } from '@fortawesome/free-solid-svg-icons'
import { faGear as faGearThin } from '@fortawesome/free-solid-svg-icons'
import { faSearch as faSearchThin } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft as faArrowLeftThin } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare as faPenToSquareThin } from '@fortawesome/free-solid-svg-icons'
import { faDove as faDoveThin } from '@fortawesome/free-solid-svg-icons'



const Home = ()=>{


return(

  <div className='h-screen flex flex-col items-center justify-center'>


    <div className='fixed top-0 left-0 w-full'>
      < Slide/>
    </div>
    
  <div className= 'flex-1 overflow-y-auto py-10 mt-16'> 
    <ul>
      <li>list 1</li>
      <li>list 1</li>
      <li>list 1</li>
      

    </ul>
  </div>
  
  <div className='fixed bottom-0 left-0 w-full py-4 bg-white flex justify-around z-10'>
    <div className="w-12 h-12 bg-blue-100"><FontAwesomeIcon icon={faCoffee} /><p>HOME</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={ faHeart } /> <p>SEARCH</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faUserThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faStar} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faPaperPlaneThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faEnvelopeThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faBellThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faCommentThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faHomeThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faThumbsDownThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faThumbsUpThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faSearchThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faGearThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faArrowLeftThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faPenToSquareThin} /><p>NOTIFICATIONS</p></div>
    <div className="w-12 h-12 bg-blue-100"> <FontAwesomeIcon icon={faDoveThin} /><p>NOTIFICATIONS</p></div>
    
     
     </div>
    
    </div>
    

)

}

 export default Home