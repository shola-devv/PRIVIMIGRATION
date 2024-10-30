import {useState} from 'react';

const Slide = ()=>{

    ///A call from an Api
  // let userName = {props} 
  let userName = 'shola emmanuel'
  
  
    const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = ()=>{
   setIsOpen (!isOpen);
  
  };
  
  
  return (
  
   <div className='h-screen flex flex-col rounded-lg'>
    <div className='fixed top-0 left-0 w-full py-4 bg-white z-10 '>
     
    <div className='fixed top-0 left-0 w-full bg-white  text-xl font-bold text-center'>JOURNALS2ME</div>
   
<img src='/dog.svg' className='w-10 h-12 cursor-pointer' onClick={handleToggle} ></img>

    </div>

    <div
    className= {` fixed top-0 left-0 h-screen w-64   bg-gray-800 text-white  p-4 transition-transform duration-300  ${
        isOpen ? 'translate-x-0' : '-translate-x-64'
    }`}

    > 
      <ul>
      
       <li className='py-2'>Profile</li>
       <li className='py-2'>Settings</li>
       <li className='py-2'>About</li>
       <li className='py-2'>Theme</li>

      </ul>


    </div>
    <div
    className={`fixed bottom-0 left-0 w-full py-4 bg-white flex juatify-around ${isOpen ? 'hidden' : ""} `}
    >
      
    </div>

   </div>
  );


}

export default Slide