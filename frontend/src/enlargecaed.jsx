import React from 'react'
import { useLocation } from 'react-router-dom';

function EnlargedCard(){
    const { state } = useLocation();
    const course = state;

    if (!course) {
        return <p>No course data found.</p>;
    }
    return(
        <div id="outer">
            <div id="enlarged-card">
               <div id="card-details">
                    <div id="card-image" style={{ backgroundImage: `url(${course.photo})`,backgroundSize: "cover" }} ></div>
                    <div id="card-text">
                        <h1 id = "card-text-h1">{course.name}</h1>
                        <p>{course.discription}</p>
                    </div>
                </div>
                <div id="about-card">
                    <p id = "abt-provider">This course is provided by {course.provider}</p>
                    <button type="button" id="enroll-btn">Enroll</button>
                </div>
                
            </div>
             
        </div>
    )
}
export default EnlargedCard