
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Login({ setUser}){

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        console.log("Status:", response.status);
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("accessToken", data.accessToken);
            setUser(data.user);
            navigate("/home");

        }else{
            form.email.value = "";
            form.password.value="";
            setError(true);
            setTimeout(() => {
                setError(false);
            },2000);
        }
        
    };
    return(
        <div id="login-center">
            <div className="login-container">
                <h2>Login</h2>
                <form id="loginForm" onSubmit={handleSubmit} >
                <div className="form-group" >
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    placeholder="Enter password" 
                    required 
                    />
                </div>
                <div className="show-password">
                    <input
                    type="checkbox"
                    id="showPassword"
                    autoComplete="current-password"
                    onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button type="submit" className="button">Login</button>
                
                <p className="error" id="errorMsg">{error ? "invalid username or password" : ""} </p>
                <Link to="/register">New User? sign up here</Link>
                </form>
            </div>
        </div>
    )
}


export default Login
