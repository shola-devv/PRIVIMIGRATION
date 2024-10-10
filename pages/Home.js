import Image from "next/image"
import Slide from "../components/Slide.jsx"
import Button from '../components/Stories.js'
import Header from '../components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



const story = ()=>{

    return(
        <div className="p-4">
            
        <div>
            < Header />
        </div>
        
        <Slide/>
        
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon= />

        
        <FontAwesomeIcon icon="fa-regular fa-user" />
        </div>
        
    )

}

export default story