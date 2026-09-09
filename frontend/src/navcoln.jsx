
import { useAuth } from './auth';
import { Link } from "react-router-dom"
function Navcoln({ setActivePage }){


    const {user} = useAuth();

    return(
        
        <div id="nav">
            <div id="profile">
                 <div id="profile-img"></div>
                 <div id="profile-name">
                     <p>{user.name}</p>
                     <p id="mail">{user.email}</p>
                 </div>
                
             </div>

            <Link className="navbtn" to="/home">Home</Link>
            <Link className="navbtn" to="/learning">Learning</Link>
            <Link className="navbtn" to="/certificates">Certificates</Link>
            <Link className="navbtn" to="/account">Account</Link>

        </div>
    );

}

export default Navcoln