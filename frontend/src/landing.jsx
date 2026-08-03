import { Link } from "react-router-dom"


function Landing(){
    return(
        <div id="login-center">
            <div className="register-container">
                <Link className="navbtn-landing" to="/login">Login</Link>
                <Link className="navbtn-landing" to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Landing