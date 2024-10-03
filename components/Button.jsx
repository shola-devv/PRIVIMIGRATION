const Button  = (props)=>{
    //let [bame, style] = props;
    
    return(
        <>
        <button className={props.style}>
           <span className="font-bold">{props.name}</span> 
        </button>
        </>
    )
}
    export default Button