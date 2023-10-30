import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink , useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bloodGroup: '',
    isDoner: false
  });

  const handleChange = (e) => {
    console.log(formData);
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const formDataOrdered = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    bloodGroup: formData.bloodGroup,
    isDoner: formData.isDoner,
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataOrdered),
      });

      if (response.ok) {
        // Handle a successful response (e.g., show a success message)
        console.log('User created successfully.');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Failed to create user.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    window.location.href = '/';
  
  };

  


  return (
    <Wrapper>
      <div className='login-background'>
        <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
          {/*--------------------- Login Container ------------------------*/}
          <div className="row border rounded-5 p-3 bg-white shadow box-area">
            {/*------------------------- Left Box ---------------------------*/}
            <div
              className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
              style={{ background: "#e3e4dc" }}
            >
              <div className="left-box-media">
                <div className="featured-image">
                  <img className="blood-size" src="/images/img/blood.png" />
                </div>
                <div className=" d-flex justify-content-center align-items-center flex-column">
                  <p
                    className="text-danger fs-2"
                    style={{
                      fontFamily: '"Courier New", Courier, monospace',
                      fontWeight: 600
                    }}
                  >
                    Be Verified
                  </p>
                  <small
                    className="text-danger text-wrap text-center"
                    style={{
                      width: "17rem",
                      fontFamily: '"Courier New", Courier, monospace'
                    }}
                  >
                    Be a Doner
                  </small>
                </div>
              </div>
            </div>
            {/*------------------ ------ Right Box --------------------------*/}
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2 className="text-success">Hello, Register Here</h2>
                  <p>We are happy to have you</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Your Good Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="samplesanmple101"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group mb-1">
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className='blood-group-select bg-light'
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>

                  <div className="input-group mb-3">
                    <label className='check-box'>Are you a blood donor?</label>
                    <input
                      type="checkbox"
                      name="isDoner"
                      checked={formData.isDoner}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <button className="btn btn-lg btn-primary w-100 fs-6">Register</button>
                  </div>



                </form>


                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-light w-100 fs-6">
                    <img src="/images/img/google.png" style={{ width: 20 }} className="me-2" />
                    <small>Sign In with Google</small>
                  </button>
                </div>

                <div className="row">
                  <small>
                    <NavLink to="/login">
                      You have already account? Click here
                    </NavLink>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
.login-background{
    background: #f0d7d7;
    animation: backgroundChange 7s infinite;
  }

  /*------------ Login container ------------*/

  .box-area {
    width: 930px;
  }
  
  /*------------ Right box ------------*/
  
  .right-box {
    padding: 40px 30px 40px 40px;
  }
  
  /*------------ Custom Placeholder ------------*/
  
  ::placeholder {
    font-size: 16px;
  }
  
  .rounded-4 {
    border-radius: 20px;
  }
  
  .rounded-5 {
    border-radius: 30px;
  }
  
  .left-beVerify {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    height: 100vh;
    /* Make the div take up the full viewport height */
  }
  
  .blood-size {
    width: 250px;
  }
  
  /*------------ For small screens------------*/
  
  @media only screen and (max-width: 768px) {
  
    .box-area {
        margin: 0 10px;
  
    }
  
    /* .blood-size{
        display: none;
     } */
    .left-box {
        height: 100px;
        overflow: hidden;
    }
  
    .right-box {
        padding: 20px;
    }
  
    .left-box-media {
        display: flex;
        justify-content: center;
        /* Horizontally center the child element */
        align-items: center;
        /* Vertically center the child element */
        min-height: 100vh;
    }
  
    .blood-size {
        width: 60px;
    }

  }
  .blood-group-select{
    width: 100%;
    padding: 10px;
    border:none;
    font-size: 16px;
    outline: none;
   
  }
  .check-box{
    padding-left: 14px;
    padding-right:15px;
  }

`;
export default Signup