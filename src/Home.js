import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from 'styled-components';
const Home = () => {
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

      <div className="centered-container">
          <div class="box" style={{ background: "#2981c0"}}></div>
          <div class="box" style={{ background: "#F12711"}}></div>
      </div>
      <div className="centered-container">
          <div class="box" style={{ background: "#f5af19 "}}></div>
          <div class="box" style={{ background: "#4738c0 "}}></div>
      </div>
      


      {/* four container */}
      <div className="centered-container">
          <div class="box" style={{ background: "#941313"}}></div>
          <div class="box" style={{ background: "#F12711"}}></div>
          <div class="box" style={{ background: "#f5af19 "}}></div>
          <div class="box" style={{ background: "#F12711"}}></div>
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

.box {
  width: 300px;
  height: 150px;
  background-color: #007bff; /* Blue color, you can change it */
  margin: 20px 60px 70px 60px;
  border-radius: 10%;
}

@media (max-width: 768px) {
  .centered-container {
      flex-direction: column; /* Stack boxes vertically on smaller screens */
  }
}
`;
export default Home