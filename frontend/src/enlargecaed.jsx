import { useContext ,React } from 'react'
import { useLocation } from 'react-router-dom';
import { useAuth } from './auth'

function EnlargedCard(){
    const {user} = useAuth()
    const { state } = useLocation();
    const course = state;
    async function enroll(course){
        const token = localStorage.getItem("accessToken");
        console.log(course);
        const _id = course._id;
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/enroll`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
             },
            body: JSON.stringify({ courseid:_id })
        });
        alert("course enroll successfull");
    }

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
                    <button type="button" id="enroll-btn" onClick={()=>{enroll(course)}}>Enroll</button>
                </div>
                
            </div>
             
        </div>
    )
}
export default EnlargedCard