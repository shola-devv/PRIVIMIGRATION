const Button  = (props)=>{
    //let [bame, style] = props;
    
    return(
        <>
        <button className={props.style}>
           <span className="font-extralight">{props.name}</span> 
        </button>
        </>
    )
}
    export default Button