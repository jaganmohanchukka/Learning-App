import React,{useState , useContext ,useEffect} from 'react';
import Card from './card';
import Loader from './loader.jsx'
import { userContext } from './App';
import { useNavigate } from "react-router-dom"

function Home(){
    const user = useContext(userContext)
    const navigate = useNavigate();
    const [search, setsearch]=useState("");
    function handlechange(e){ 
        setsearch(e.target.value);
    }
    
    function opencourse(item){
        console.log("coursed clicked",item);
        navigate(`/courses/${item._id}`,{ state: item });
    }
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchCourses();
    }, []);

    async function fetchCourses() {
        try {
            const response = await fetch("http://localhost:3000/api/courses/courses");
            if (!response.ok) {
            throw new Error("Failed to fetch courses");
        }

        const data = await response.json();
        setCourses(data);
        } catch (error) {
        console.error(error);
        }finally {
            setLoading(false);
        }
    }
    function handlesearch(){
        console.log(`searched for ${search}`);
        setsearch("");
    }
    if(loading){
        return(<Loader />)
    }
    return(

        <div id="outer" >
            <div id="home-out">
                <div id="gret-text">                    
                    <h1>HELLO</h1>
                    <h2>Welcome, {user.name} </h2>
                    <div id = "search-set">
                        <input type="text"  id="search" value={search} placeholder='Browse for courses' onChange={handlechange} />
                        <button id="search-btn" onClick={handlesearch} >search </button>  
                    </div>

                </div>
                <div id="home-img"></div>

            </div> 
            <div id="home-container" >
                {courses.map((item, index) => (
                    <Card key={index} name={item.name} image={item.photo} onClick={()=>{opencourse(item)}}/>
                ))}

            </div>     

        </div>

    )
}
export default Home 