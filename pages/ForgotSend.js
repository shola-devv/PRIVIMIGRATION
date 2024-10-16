const ForgotSent =()=>{



    return(

        <div className='px-10 py-16 md:m-20 xl:mx-96 '>
         <div>
         <h1 className='flex justify-center  sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-3xl  font-semibold p-4  font-mono'>     PRIVIMUGRATION</h1>
         
         </div>
        <div className='flex justify-center w-76  h-76 bg-slate-100 rounded-xl'>
       <h1 className="px-20 py-16 lg:text-2xl md:text-xl">email sent successfully, a reset password link will be sent to your email if it exists on our database</h1>
       
         </div>
         
        
         <div className='flex justify-center pt-40 lg:pt-4 lg:-mb-third'>
       <img
       src="../aircraft.svg"
       alt="oh, my bird"
       className="lg:w-[36vw] md:w-[32vw] sm:w-56"
       />
       </div>
        </div>
    )
       



}

export default ForgotSent