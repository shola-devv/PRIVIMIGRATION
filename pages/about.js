import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft as faArrowLeftThin  } from '@fortawesome/free-solid-svg-icons'
import { faYinYang as faYinYangThin } from '@fortawesome/free-solid-svg-icons'



const About =()=>{



    return(

        <div className='px-2  py-16 md:m-20 xl:mx-96 '>
        <Link href='/Home'><h1><FontAwesomeIcon icon={faArrowLeftThin} /></h1></Link> 
         <div>
         <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4 '>     JOURNALS2ME <FontAwesomeIcon className='text-black' icon={faYinYangThin} /></h1>
         
         </div>
        <div className='flex justify-center w-76  h-screen rounded-xl '>
       
          <div>
            <h5>
                Journals2me is a personal journals keeping app for understading the effecg of nature o ,
            </h5>
             <p>developed by <Link href="/" className="text-blue-400 cursor-pointer">Shola Emmanuel</Link></p>
          </div>
      

        <div className='flex justify-center fixed bottom-0 lg:pt-40 '>
         <img
       src="../bird.svg"
       alt="oh, my bird"
       className="lg:w-[16vw] md:w-[24vw] sm:w-24"
       />
       </div>
         </div>
         
        
         
       
        </div>
    )
       



}

export default About 