



function Certificate(props){
    return(
        <div id="certificate" >
            <p id="cert-text"> This is to certify that {props.name} compleated {props.course} from {props.provider} on {props.year} </p>

        </div>
    )
}

export default Certificate