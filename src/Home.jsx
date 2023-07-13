import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-page">
          <h1>Enter into Student Info System</h1>
          <Link to="/enroll" className="enroll-button">
            Enroll Now!
          </Link>
        </div>
      );
    };
export default Home