import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Post from "@/components/Post"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome as faHomeThin } from '@fortawesome/free-solid-svg-icons'
import { faDove as faDoveThin } from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellThin } from '@fortawesome/free-solid-svg-icons'
import { faSearch as faSearchThin } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane as faPaperPlaneThin } from '@fortawesome/free-solid-svg-icons'
import Posts from "@/components/Posts"
import Slide from "@/components/Bar"
import Link from 'next/link';

/*

<form onSubmit={handleSubmit(onSubmit)}>
  <input type='text'  placeholder='write a journal here' className=' border-4  border-pink-300 rounded-lg w-64 h-12 ' {...register('journal')}></input>
   <input type ='submit' value='save' className=' relative border-2 bg-pink-200 border-pink-400 rounded-md w-20 h-8 m-2 cursor-pointer' ></input>
   {errors.journal && <div className='text-black text-sm'>{errors.journal.message}</div>}
  </form>

 <ul>
      <li>list 1</li>
      <li>list 1</li>
      <li>list 1</li>
      //vuong dang dev.to how to use fontawesome in next.js

    </ul>
*/

const Home = ()=>{

  const schema = yup.object().shape({
    
    journal: yup.string().required('field has to be filled')
})

const {  register, handleSubmit, formState:{errors},} = useForm({resolver:yupResolver(schema)});


const onSubmit = async(data)=>{
  console.log(data)
  
      const {id, password} = data;
      try {
  
          const response = await axios.post('URL/comments', 
              {
               id,
               password
              }
          
          );
          console.log(response)
          localStorage.setItem('token', response.token);
                 
                 
          if (response.ok){
          //to success/ message page
          navigate('/fetch');
          } else {
          console.error('failed to submit comment');
          }
      }
          catch (error){ console.error('Error:', error)} 


      
  }


return(

  <div className='h-screen flex flex-col items-center justify-center'>


    <div className='fixed top-0 left-0 w-full'>
    < Slide/>
    </div>
    
  <div className= 'flex-1 overflow-y-auto  mt-10 border-4 bg-grey-200 w-full  mx-6 rounded-lg'> 
  
     <Posts/>
  </div>
  
  
  <div className='fixed bottom-0 left-0 w-full py-4 bg-white flex justify-around z-10'>
    
  <div className='fixed bottom-0 left-0 w-full mb-20 bg-white  flex justify-around '>
   
  <Link href='/Post'><div className="w-16 h-10 bg-slate-100  rounded-full cursor-pointer"><FontAwesomeIcon icon={faPaperPlaneThin} className="w-8 h-8  text-blue-500" /></div></Link>
  </div>
    <div className="w-12 h-12  bg-grey-200 cursor-pointer"><FontAwesomeIcon icon={faHomeThin} className="w-8 h-8 text-lime-500" /></div>
    <Link href='/Search'><div className="w-12 h-12 bg-grey-200 cursor-pointer"><FontAwesomeIcon icon={faSearchThin} className="w-8 h-8  text-lime-500" /></div></Link>
    <Link href='/Notifications'><div className="w-12 h-12 bg-grey-200 cursor-pointer"><FontAwesomeIcon icon={faBellThin} className="w-8 h-8  text-lime-500" /></div></Link>
    
    
     </div>
 
  </div>
 
    
    
    
    

)

}

 export default Home