import React from 'react'
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

function Account(){
    const {user,logout} = useAuth();
    const navigate = useNavigate();
    function handlelogout(){
        const cofm = window.confirm("do you want to logout");
        if(cofm){
            logout();
            navigate("/");
        }

    }
    
    return(
        <div id="outer">
            <p>account</p>
            <h1>HELLO, {user.name} </h1>
            <button id="logout" onClick={handlelogout}>logout</button>
        </div>
    );
}

export default Account