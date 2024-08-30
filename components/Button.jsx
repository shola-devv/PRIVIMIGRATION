const Button  = (props)=>{
    //let [bame, style] = props;
    
    return(
        <>
        <button className={props.style}>
            {props.name}
        </button>
        </>
    )
}
    export default Button