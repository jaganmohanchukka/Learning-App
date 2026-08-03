import React from 'react'
function Card(props){

    return(
        <div className='card' onClick={props.onClick}>
            <div className="outer">
                <div id="card-image" style={{ backgroundImage: `url(${props.image})`,backgroundSize: "cover" }} ></div>
                <p id="card-name">{props.name}</p>
            </div>
        </div>
    );
}
export default Card