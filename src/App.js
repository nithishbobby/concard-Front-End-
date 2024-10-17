import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Card from './components/Card';
import VerifyOTP from './components/VerifyOTP';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/card" element={<Card />} /> {/* Fixed missing / in path */}
          <Route path="/verifyOTP" element={<VerifyOTP />} /> {/* Fixed uppercase in path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
