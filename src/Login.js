import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { NavLink, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useTokenproviderContext } from './context/usercontext';
const Login = () => {
    const usenavigate= useNavigate();
    const {storeToken, isToken} = useTokenproviderContext();
    const [loginData, setloginData] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]: value
        });
        console.log(loginData);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })
            const data = await response.json();
            console.log("login json",data);
        
            if(response.ok){
                console.log("before", isToken)
                alert("login successfull");
                await storeToken(data.token);
                usenavigate('/');
            }else{
                alert("Login failed");
                setloginData({
                    email: '',
                    password: '',
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

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
                                    <h2 className="text-success">Hello,Again</h2>
                                    <p>We are happy to have you back.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder="Email address"
                                            name="email"
                                            value={loginData.email}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="input-group mb-1">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder="Password"
                                            name="password"
                                            value={loginData.password}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                                    </div>
                                </form>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-6">
                                        <img src="/images/img/google.png" style={{ width: 20 }} className="me-2" />
                                        <small>Sign In with Google</small>
                                    </button>
                                </div>
                                <div className="row">
                                    <small><NavLink to="/signup">
                                        Don't have account? <a href="#">Sign Up</a>
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
};

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

`;
export default Login