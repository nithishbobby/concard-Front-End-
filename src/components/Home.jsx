import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import styles for the Home page
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="animated-text">Welcome to ConnexCard</h1>
      <p className="home-description">
        Sign up or log in to connect with the world and enhance your professional network.
      </p>
      <div className="home-buttons">
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
        
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
      
      {/* Feature Section */}
      <div className="feature-section">
        <h2>Why Choose ConnexCard?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Professional Networking</h3>
            <p>
              Connect with professionals from various industries, expand your network, and build meaningful relationships.
            </p>
          </div>
          <div className="feature-card">
            <h3>Personalized Profile</h3>
            <p>
              Showcase your skills, achievements, and experiences with a customized profile that stands out to recruiters and peers.
            </p>
          </div>
          <div className="feature-card">
            <h3>Stay Updated</h3>
            <p>
              Keep up with the latest trends, news, and updates in your industry with our curated content feed.
            </p>
          </div>
          <div className="feature-card">
            <h3>Secure and Private</h3>
            <p>
              Your data is secure with us. We prioritize your privacy and ensure that your information is always protected.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About ConnexCard</h2>
        <p>
          ConnexCard is a next-generation networking platform that empowers professionals to connect, collaborate, and grow together. Whether you’re looking to expand your connections, showcase your achievements, or stay updated with industry trends, ConnexCard offers a seamless and secure experience tailored to your needs.
        </p>
        <p>
          Join ConnexCard today and start building your professional presence with the power of a strong network!
        </p>
      </div>
    </div>
  );
};

export default Home;
