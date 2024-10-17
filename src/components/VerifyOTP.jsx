import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './VerifyOTP.css';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/verify-otp', { email, otp });
      console.log('OTP verification successful:', response.data);
      alert("OTP verification successful. You are now registered.");
      // Redirect to the login page or any other page
      navigate('/login');
    } catch (error) {
      console.error('OTP verification error:', error.message);
      alert('OTP verification failed. Please try again.');
    }
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit} className="verify-otp-form">
        <div className="form-group">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="verify-otp-button">Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOTP;
