import Link from "next/link";
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


 const Login =()=>{

  const schema = yup.object().shape({
    username: yup.string().required('username is required'),
    email:yup.string().email('invalid email').required('Email is required'),
    password: yup.string().required('password is required')
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

  <div className='px-10 py-16 md:m-20 xl:mx-96 font-mono'>
   <div>
   <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4 text-blue-400 font-mono '>PRIVIMIGRATION</h1>
   <h2 className=' flex justify-center  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold p-4  text-blue-400 font-mono'>LOGIN</h2>
   </div>
  <div className='flex justify-center w-76  h-86 bg-blue-100 rounded-xl'>
  
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className='pb-2 pt-2'>
<div className='py-4'>
<label className=' font-semibold'>username:</label>
</div>
<input type='text' className='border-4  border-slate-300 rounded-lg w-64 h-12 ' {...register('email')}></input><br></br>
{errors.username && <div className='text-black text-sm'>{errors.username.message}</div>}
</div>

<div className='pb-4 pt-4 px-4'>
<div className='py-4'>
<label className=' font-semibold'>  Email:</label>
</div>
<input type='text' className='border-4  border-slate-300 rounded-lg w-64 h-12 ' {...register('email')}></input><br></br>
{errors.email && <div className='text-black text-sm'>{errors.email.message}</div>}
</div>

<div className='pb-4 pl-4'>
  <div className='py-4'>
    <label className=' font-semibold'>Password:</label>
  </div>

<input type='password' className=' border-4  border-slate-300 rounded-lg w-64 h-12 ' {...register('password')}></input><br></br>
{errors.password && <div className='text-black text-sm'>{errors.password.message}</div>}
</div>


<div className='flex justify-center'>  <input type ='submit' value='LOGIN' className=' relative border-4 bg-blue-200 border-blue-400 rounded-md w-20 h-8 m-2 cursor-pointer' ></input></div>
</form>

   </div>
   <p><Link href='/ForgotPass' className="text-blue-600">forgot password?</Link></p>
   <h2>Dont have an account? <Link href='/' className="text-blue-600">Signup</Link></h2>
   <Link href='/Home'><p className='text-blue-900'>this webapp is still under development, click here to preview pages</p></Link>
  <div className='flex justify-center pt-40 lg:pt-4 lg:-mb-third'>
<img
src="../WorldGlobe.svg"
alt="oh, my globe"
className="lg:w-[36vw] md:w-[32vw] sm:w-56"
/>
</div>
  </div>



)


 }

 export default Login