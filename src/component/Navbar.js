import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FaHome, FaUserPlus,BiSolidLogIn } from 'react-icons/fa';
function Navbar() {
  return (
    <Wrapper>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Logo and Name on the left */}
        <a className="navbar-brand" href="#">
          <img src="/images/img/blood.png" alt="Logo" width={50} height={50} />{" "}
          {/* Replace with your logo image */}
          <span class="portal-name">RactKosh</span>
        </a>
        {/* Portal Names on the right */}
        <div className="d-flex">
          <NavLink to="/about">
            <span className="navbar-text mr-5 text-danger">About</span>
          </NavLink>

          <NavLink to="/about">
            <span className="navbar-text mr-5 text-danger">Looking For a blood</span>
          </NavLink>

          <NavLink to="/">
          <span className="navbar-text mr-5"><FaHome size={40} color="red" /> {/* Use an icon */}</span>
          </NavLink>

          <NavLink to="/signup">
          <span className="navbar-text mr-5"><FaUserPlus size={40} color="green" /> {/* Sign Up icon */}</span>
          </NavLink>

          <NavLink to="/login">
            <span className="navbar-text mr-5 text-success">Login</span>
          </NavLink>
        </div>
      </div>
    </nav>
      
    
    </Wrapper>
  )
}

const Wrapper = styled.div`
.navbar {
  min-height: 80px; /* Adjust the height as needed */
}
.navbar .d-flex .navbar-text {
  margin-right: 20px; /* Adjust the margin as needed */
  font-size: 1.5rem;
  
}
.navbar-brand .portal-name {
  font-size: 28px; /* Adjust the font size as needed */
  font-size: 2rem;
  font-weight: 500;
}
.navbar-brand img {
  width: 80px; /* Adjust the width as needed */
  height: 80px; /* Adjust the height as needed */
}
.main-container{
  display: flex;
  justify-content: center;
  /* Center horizontally */
  align-items: center;
}
`;
export default Navbar