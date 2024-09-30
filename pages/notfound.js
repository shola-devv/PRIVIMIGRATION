import Link from "next/link"



export default notFound = ()=>{

return(
<>

<h1> PAGE NOT FOUND</h1>
<h2><Link href='/' className='text-blue-500'>go back home</Link></h2>
</>

)

}