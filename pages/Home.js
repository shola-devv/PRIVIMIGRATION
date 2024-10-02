import Image from "next/image"
import Slide from "../components/Slide.jsx"
import Button from '../components/Stories.js'




const story = ()=>{

    return(
        <div className="p-4">
        <div>
            <image>dd</image>
            <h2>privimigration</h2>
        </div>

        <Slide/>

        <div className="bg-slate-400">
        <h2>Stories</h2>
        <h2>Search</h2>
        <h2>Notifications</h2>
        </div>

        </div>
        
    )

}

export default story