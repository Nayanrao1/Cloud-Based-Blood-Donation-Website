import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from 'styled-components';
import { BiSolidDonateBlood, BiSolidLogIn } from 'react-icons/bi';
import { FaHospital, FaUserCircle } from 'react-icons/fa';
import axios from "axios";
import { useUserContext } from './context/usercontext';
// import { useUserContext } from './context/usercontext';
const Home = () => {
const {isLoading,isError,users,donerusers} = useUserContext();
console.log(isLoading);
console.log(donerusers);
  return (
    <Wrapper>
      {/* Corosoul */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/img/modi.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/img/modi2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/img/modi.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* two CARD */}


      <div className='two-card'>
        <div className="centered-container">
          <div class="box-horijontal" style={{ background: "#2981c0" }}>
            <div><h1>0</h1></div>
            <div><h4>Approved Camps</h4></div>
          </div>
          <div class="box-horijontal" style={{ background: "#53884f" }}>
            <div><h1>0</h1></div>
            <div><h4>Blood unit collected</h4></div>
          </div>
        </div>
        <div className="centered-container">
          <NavLink to="/donerRegister" style={{ textDecoration: 'none' }}>
            <div class="box-horijontal" style={{ background: "#f5af19 " }}>
            <div><h1>{donerusers.length}</h1></div>
            <div><h4>Donors Registered </h4></div>
          </div>
          </NavLink>
          
          <div class="box-horijontal" style={{ background: "#4738c0 " }}>
            <div><h1>{users.length}</h1></div>
            <div><h4>Total Users</h4></div>
          </div>
        </div>
      </div>

      {/* four container */}
      <div className='four-card'>
        <div className="centered-container">
          <div class="box" style={{ background: "#941313" }}>
            <div > <BiSolidDonateBlood size={40} color="white" /></div>
            <div> <h5>Blood </h5> </div>
            <div> <h5>Availability </h5> </div>
            <div> <h5>Search </h5> </div>
          </div>
          <NavLink to="/login" style={{ textDecoration: 'none' }}>
            <div class="box" style={{ background: "#F12711" }}>
            <div > <BiSolidLogIn size={40} color="white" /></div>
            <div> <h5>Doner </h5> </div>
            <div> <h5>Login </h5> </div>
          </div>
          </NavLink>
          
          <div class="box" style={{ background: "#f5af19 " }}>
            <div > <FaHospital size={40} color="white" /></div>
            <div> <h5>Blood </h5> </div>
            <div> <h5>Donation </h5> </div>
            <div> <h5>Blood </h5> </div>
          </div>
          <div class="box" style={{ background: "#2981c0" }}>
            <div > <FaUserCircle size={40} color="white" /></div>
            <div> <h5>Register </h5> </div>
            <div> <h5>Voluntary </h5> </div>
            <div> <h5>BloodCamp </h5> </div>
          </div>
        </div>
      </div>

      <div class="container mt-4 mb-4 text-center">
      <h2 class="container-title">Upcomming Blood Camp</h2>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="https://via.placeholder.com/50" class="card-img-top" alt="Advertisement Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Blood bank name</h5>
                        <p class="card-text">Description</p>
                        <a href="#" class="btn btn-primary">Register Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="https://via.placeholder.com/50" class="card-img-top" alt="Advertisement Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Blood bank name</h5>
                        <p class="card-text">Description</p>
                        <a href="#" class="btn btn-primary">Register Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="https://via.placeholder.com/50" class="card-img-top" alt="Advertisement Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Blood bank name</h5>
                        <p class="card-text">Description</p>
                        <a href="#" class="btn btn-primary">Register Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="https://via.placeholder.com/50" class="card-img-top" alt="Advertisement Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Blood bank name</h5>
                        <p class="card-text">Description</p>
                        <a href="#" class="btn btn-primary">Register Now</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.littlemargin{
  margin-bottom:20px;
}
.box-horijontal{
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 300px;
  height: 150px;
  background-color: #007bff; /* Blue color, you can change it */
  margin: 20px 60px 70px 60px;
  border-radius: 10%;
  transition: all 0.3s;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
}
.box {
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 300px;
  height: 150px;
  background-color: #007bff; /* Blue color, you can change it */
  margin: 40px 60px 40px 60px;
  border-radius: 10%;
  transition: all 0.3s;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
.box:hover {
  background-color: #e74c3c;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
.two-card{
  background-image: url('/images/img/img5.jpg');
  background-size: cover; 
  width: 100%;
}

.four-card{
  background-image: url('/images/img/img6.jpg');
  background-size: cover; 
  width: 100%;
}
@media (max-width: 768px) {
  .centered-container {
      flex-direction: column; /* Stack boxes vertically on smaller screens */
  }
}
`;
export default Home