import Image from "next/image"


const Slide = ()=>{
  ///A call from an Api
let userName = {props} 

return (
    <>
    <div>
   <Image></Image>
   <Image></Image>
 <p>this image part should cover some detail as to how we intend to work</p>
    {userName}
    <p>friends</p>
        </div>
    </>
)

}

export default Slide