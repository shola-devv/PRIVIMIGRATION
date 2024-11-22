import Image from "next/image"



const Profile = ()=>{


const name  = 'Emmanuel shola'

    return(
    
        <div className='max-w-7xl mx-auto p-4'>
      
     
          

            {/*portfolio summary*/}
            <div className="bg-slate-400 bg-transparent shadow-md rounded  p-4 mb-4">
            <div  ><Image className='rounded-full m-4 cursor-pointer border-10 border-transparent bg-opacity-50 backdrop-filter' src='/mepic.png' alt="pfp" height={100} width={100} ></Image></div>
                <h1 className="text-2xl font-bold">welcome Emmanuel</h1>
             
            <ul>
                <li>
                    <span className='text-gray-600 font-bold'>Posts:</span>
                    <span className='text-2xl font-bold'>23</span>
                </li>
                <li>
                    <span className='text-gray-600 font-bold'>Total Assets:</span>
                    <span className='text-lg font-bold'>10</span>
                </li>
                <li>
                    <span className='text-gray-600 font-bold'>24h change::</span>
                    <span className='text-lg font-bold text-green-500'>+2.5%</span>
                </li>
            </ul>

            </div>



        </div>
    
    )
    
    }
    
     export default Profile