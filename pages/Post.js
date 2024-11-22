import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane as faPaperPlaneThin } from '@fortawesome/free-solid-svg-icons'



const Post = ()=>{

const arrow = <FontAwesomeIcon icon={faPaperPlaneThin} className="w-8 h-8 text-lime-500" />
    
    const schema = yup.object().shape({
        post: yup.string().required('post is required'),
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


  <div className='  flex justify-around '>

   <form onSubmit={handleSubmit(onSubmit)}>
   <input type='text'  placeholder='make a banger post, dont hold back' className='   rounded-lg w-96 h-64' />
   <input type='submit' className=' relative border-2 bg-lime-200 border-lime-500 rounded-lg w-40 h-10 ml-52 lg:ml-25rem animate-bounce loo z-40 font-bold' value='send it' />
   <div className="w-12 h-12  bg-grey-200 cursor-pointer"><FontAwesomeIcon icon={faPaperPlaneThin} className="w-8 h-8 text-lime-500" /></div>
  </form>
    </div>


       




    )



}

export default Post