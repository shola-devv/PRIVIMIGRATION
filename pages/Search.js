
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch as faSearchThin } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const Search = ()=>{

    const schema = yup.object().shape({
        username: yup.string().required('username is required'),
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
      

return (

<div>
<div>
    <form>
        
        <div className='pb-4 pt-2 px-4'>
<div className='py-2'>

</div>
<input type='text' className=' border-2  border-slate-300 rounded-lg w-64 h-8 ' {...register('username')}></input><br></br>
{errors.username && <div className='text-black text-sm'>{errors.username.message}</div>}
</div>
       <div> <FontAwesomeIcon icon={faSearchThin} className="w-8 h-8  text-lime-500" /></div>
    </form>
</div>

</div>

)


}

export default Search