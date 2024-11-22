import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faListDots, faThumbsDown as faThumbsDownThin } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as faThumbsUpThin } from '@fortawesome/free-solid-svg-icons'
import { faComment as faCommentThin } from '@fortawesome/free-solid-svg-icons'
import { faRetweet as faRetweetThin } from '@fortawesome/free-solid-svg-icons'
import {faListDots as faListDotsThin } from '@fortawesome/free-solid-svg-icons'



const Posts = () => {

    const [messages, setMessages] = useState([
        {src:'aircraft.svg', text: 'Just created an account, hows everyone here doing?', time:'9:40', scheduled:' scheduled-send =8:44', sender:'them'},
        {src:'aircraft.svg', text: 'im planning a vacation, toughts on aa location?', time:'9:40', scheduled:'scheduled-send = 8:44', sender:'you'},
        {src:'aircraft.svg', text: 'Australia is the perfect place to be right now', time:'9:40', scheduled:'scheduled-send = 8:44', sender:'her'},
        {src:'aircraft.svg', text: 'My trip to bali was awesome, anyone else been there', time:'9:40', scheduled:'8:44', sender:'you'},
        {src:'aircraft.svg', text: 'Hey there?', time:'9:40', scheduled:'8:44', sender:'you'},
        {src:'aircraft.svg', text: 'up Canada!!', time:'9:40', scheduled:'8:44', sender:'you'},
    ]);

    return (

    <div className="max-h-screen overflow-y-auto p-4 ">
     {messages.map((message,index) =>(

<div key ={index} className='max-w-md mx-auto bg-white rounded-lg shadow-md p-4'>


   { /* Header */}
   <div className="flex justify-between items-center mb-4">

    <div className='flex items-center'>
        <img  
       src='mepic.png'
        
        className='w-10 h-10 rounded-full mr-2'
        />
  <span className ='w-10 h-10 rounded-full mr-2'>@shola</span>

    </div>
    <div className='flex items-center'>
        <span className="text-gray-500 text-sm">1h ago</span>
       <span className="ml-2 text-gray-500"><FontAwesomeIcon icon={faListDotsThin} /></span>
    </div>
    </div>
    
    <p className>{message.text}</p>
    <div className='flex justify-between items-center'>
        
    <div className='flex items center'>
        git
    <span className='mr-2 text-gray-500'> <div> <FontAwesomeIcon icon={faCommentThin} /></div></span> 
    <span className='text-gray-500'>12  </span>   
     </div>
     <div className='flex items-center'>

      <span className="mr-2 text-gray-500"><div> <FontAwesomeIcon icon={faThumbsUpThin} /></div></span>

      <span className="text-gray-500">
        25
      </span>

      <span className="mx-2 text-gray-500"> <FontAwesomeIcon icon={faThumbsDownThin} /></span>
      <span className="text-gray-500">
        25 
      </span>

     <div className='flex mx-4'>
     <span className="mr-2 text-gray-500"><FontAwesomeIcon icon={faRetweetThin} /></span>
     <span className="text-gray-500">
        25 
      </span>
      </div>

     </div>

      </div>
    </div>
     ))} 
    
   </div>


    )


}

export default Posts