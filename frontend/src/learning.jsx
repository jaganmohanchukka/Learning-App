import Card from './card.jsx';
import { useEffect ,useState } from 'react';
function Learning(){
    const [enrolled ,setenrolled ]=useState([])
    useEffect(() => {
        fetchEnrolledCourses();
    }, []);
    async function fetchEnrolledCourses() {
        try {
            const response = await fetch("http://localhost:3000/api/courses/enrolled");
            if (!response.ok) {
                throw new Error("Failed to fetch courses");
            }
            const data = await response.json();
            setenrolled(data);
        } catch (error) {
            console.error(error);
        }
    }
    const coursescompleated=[

    ];
    return(
        <div id="learn-outer">
            <div id="graph">
                
            </div>
            <p id = "learn-para" >Courses you are learning</p>
            <div id="learn-inner">
                {enrolled.map((item, index) => (
                  <Card key={index} name={item.name} image={item.photo} />
                ))}
            </div>
            <p id = "learn-para" >Courses you compleated</p>
            <div id="learn-inner">
                {coursescompleated.map((item, index) => (
                    <Card key={index} name={item.name} image={item.image} />
                ))}
            </div>
        </div>
    )
}
export default Learning