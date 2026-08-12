import Navcoln from './navcoln.jsx'
import Home from './home.jsx';
import Learning from './learning.jsx' 
import Certificates from './certificates.jsx' 
import Account from './account.jsx'
import EnlargedCard from './enlargecaed';
import Login from './login.jsx'
import './App.css';
import React, {useState , createContext} from 'react';
import { Routes, Route } from 'react-router-dom'
import Register from './register.jsx';
import Landing from './landing.jsx';
export const userContext = createContext();


function App() {
  const admin = {
      name: "Admin",
      email: "admiin@gmail.com",
  }
  const [user, setuser] = useState(admin);
  const [loading, setloading] = useState(false);
  if(!loading){
    return(
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login setloading ={setloading} setUser={setuser}/>}/>
      </Routes>
  )

  }
  return (
    
    <div className="App">

      <userContext.Provider value={user}>

        <Navcoln />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses/:name" element={<EnlargedCard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/account" element={<Account  setuser={setuser} />} />
        </Routes>

      </userContext.Provider>

    </div>
  );
}

export default App;
