import Navcoln from './navcoln.jsx'
import Home from './home.jsx';
import Learning from './learning.jsx' 
import Certificates from './certificates.jsx' 
import Account from './account.jsx'
import EnlargedCard from './enlargecaed';
import Login from './login.jsx';
import './App.css';
import React, {useState , createContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './register.jsx';
import Landing from './landing.jsx';
import { AuthProvider } from './auth.jsx';
import ProtectedRoute from './protectedroute.jsx';
import AppLayout from './applayout.jsx';


function App() {

	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Landing />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/login" element={<Login />}/>
				<Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>} >
					<Route path="home" element={<Home />} />
			       	<Route path="courses/:name" element={<EnlargedCard />} />
			       	<Route path="learning" element={<Learning />} />
			    	<Route path="certificates" element={<Certificates />} />
			    	<Route path="account" element={<Account />} />
				</Route>
			</Routes>

		</AuthProvider>

    );
}

export default App;
