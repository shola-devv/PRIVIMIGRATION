import Link from "next/link"
import Image from "next/image"


///add your image o

const  notFound = () => {

return(
<div className="mx-auto my-auto" >


<div  className="m-60">
<h1 className="font-bold text-4xl"> PAGE NOT FOUND</h1>
<h2><Link href='/' className='text-blue-500 font-bold text-xl'>go back home</Link></h2>
<Image></Image>
</div>


</div>

)

}
export default  notFound