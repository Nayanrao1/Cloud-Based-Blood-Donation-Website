import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FaHome, FaUserPlus } from 'react-icons/fa';
import { useTokenproviderContext } from '../context/usercontext';
function Navbar() {
  const { isLoggedin } = useTokenproviderContext();
  console.log("navbarrr", isLoggedin);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Logo and Name on the left */}
          <div className='logo'>
            <a className="navbar-brand" href="#">
              <img src="/images/img/blood.png" alt="Logo" width={50} height={50} />{" "}
              {/* Replace with your logo image */}
              <span class="portal-name">Nav-Pran</span>
            </a>
          </div>

          {/* Portal Names on the right */}
          <div className={`d-flex ${window.innerWidth <= 600 ? 'hidden-sm' : ''}`}>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <span className="navbar-text mr-5 text-danger">About</span>
            </NavLink>

            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <span className="navbar-text mr-5 text-danger">blood?</span>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <span className="navbar-text mr-5"><FaHome size={40} color="red" /> {/* Use an icon */}</span>
            </NavLink>

            {isLoggedin ? (<NavLink to="/logout" style={{ textDecoration: 'none' }}>
              <span className="navbar-text mr-5 text-success">LogOut</span>
            </NavLink>) : (<><NavLink to="/signup" style={{ textDecoration: 'none' }}>
              <span className="navbar-text mr-5"><FaUserPlus size={40} color="green" /> {/* Sign Up icon */}</span>
            </NavLink>

              <NavLink to="/login" style={{ textDecoration: 'none' }}>
                <span className="navbar-text mr-5 text-success">Login</span>
              </NavLink></>)}
          </div>

          {/* hidden button  */}
          <button className="navbar-toggle" onClick={toggleNavbar}>☰</button>
        </div>
      </nav>
      {/* drop down navbar/////////////// */}
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        
          <NavLink to="/about" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className="navbar-text mr-5 text-danger">About</span>
          </NavLink>
       
        <NavLink to="/about" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-text mr-5 text-danger">Looking For blood</span>
        </NavLink>

        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-text mr-5"><FaHome size={40} color="red" /> {/* Use an icon */}</span>
        </NavLink>

        {isLoggedin ? (<NavLink to="/logout" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className="navbar-text mr-5 text-success">LogOut</span>
            </NavLink>) : (<><NavLink to="/signup" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span className="navbar-text mr-5"><FaUserPlus size={40} color="green" /> {/* Sign Up icon */}</span>
            </NavLink>

              <NavLink to="/login" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span className="navbar-text mr-5 text-success">Login</span>
              </NavLink></>)}
      </div>
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

/* dropdown css is written below*/

.navbar-toggle {
  display: none;
  float: right;
  cursor: pointer;
  padding: 15px;
  background-color: #333;
  color: #f2f2f2;
  border: none;
}

.dropdown {
  display: none;
  overflow: hidden;
  background-color: #ede9e9;
  
}


.dropdown a {
  float: none;
  display: block;
  text-align: left;
}

@media screen and (max-width: 800px) {
  .d-flex {
    display: none !important;;
  }
  .hidden-sm {
    display: none;
  }

  .navbar-toggle {
    display: block;
  }

  .dropdown {
    display: none;
  }

  .dropdown.open {
    display: block;
  }
  .dropdown a {
    display: block;
    width: 100%;
  }
}
`;
export default Navbar