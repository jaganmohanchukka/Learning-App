import React,{useContext ,useState} from 'react'
import { useAuth } from './auth';

function Account(){
    // const user = useAuth();
    // const [name, setname]=useState("");
    // function handlechange(e){ 
    //     setname(e.target.value);
    // }
    // function handleclick(){
    //     if(name.length!== 0){
    //         setuser(name);
    //     }
        
    //     setname("");
    // }
    // return(
    //     <div id="outer" >
    //         <h1>HELLO, {username.name} </h1>
    //         <div id="searcch-set">
    //             <input type="text"  id="search" value={name} placeholder='Change User Name' onChange={handlechange} />
    //             <button id="search-btn" onClick={handleclick} >Change </button>  
    //         </div>
    //     </div>
    // )
    return(
        <div>account</div>
    );
}

export default Account