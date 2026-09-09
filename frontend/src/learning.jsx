import Card from './card.jsx';
import { useEffect ,useState } from 'react';
function Learning(){
    const [enrolled ,setenrolled ]=useState([])
    useEffect(() => {
        fetchEnrolledCourses();
    }, []);
    async function fetchEnrolledCourses() {
        try {
            const token = localStorage.getItem("accessToken");
            console.log("TOKEN:", token);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/enrolled`,{headers: {
                    Authorization: `Bearer ${token}`
            }});
            const data = await response.json();
            if (!response.ok) {
                throw new Error("Failed to fetch courses");
            }
            setenrolled(data);
        } catch (error) {
            console.error(error);
        }
    }
    const coursescompleated=[

    ];
    return(
        <div id="outer">
            <div id="graph">
                
            </div>
            <p id = "learn-para" >Courses you are enrolled</p>
            <div id="learn-inner">
                {enrolled.map((item, index) => (
                  <Card key={index} name={item.name} image={item.photo} />
                ))}
            </div>
            {/* <p id = "learn-para" >Courses you compleated</p>
            <div id="learn-inner">
                {coursescompleated.map((item, index) => (
                    <Card key={index} name={item.name} image={item.image} />
                ))}
            </div> */}
        </div>
    )
}
export default Learning