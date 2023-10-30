import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <Wrapper>
      
      <div class="footer-panel1"><a href="#">Back to top</a>
      
    </div>

    <div class="container-fluid bg-dark text-white py-4">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4  ">
                <h4>About Us</h4>
                <p><a href="#">About Nav Praan</a></p>
                <p><a href="#">Blood Availability</a></p>
                <p><a href="#">Want to be a part of us</a></p>
            </div>
            <div class="col-md-4 ">
                <h4>Services</h4>
                <p><a href="#">Nav Prann Services</a></p>
                <p><a href="#">Collab with multiple organigations</a></p>
                <p><a href="#">Available anytime anywhere</a></p>
            </div>
            
            <div class="col-md-4 ">
                <h4>Connect with Us</h4>
                <p><a href="#">Facebook</a></p>
                <p><a href="https://twitter.com/home">Twitter</a></p>
                <p><a href="#">Instagram</a></p>
            </div>
        </div>
    </div>
</div>
<div class="footer-logo">
      <div class="footerlog">
        
      </div>
    </div>
    
    </Wrapper>
  )
}
const Wrapper = styled.div`
.footer-panel1{
  width: 100%;
  background-color: #222f3d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
}
.footer-panel1:hover{
  background-color:#374b5f ;
}

.footer-logo{   
  height: 70px;
  width:100%;
  background-color: #0F1111;
  display: flex;
  justify-content: center;
  align-items: center;

}
.footerlog{
  background-image:url("/images/img/blood.png");
  height: 56px;
  width: 56px;
  background-size: cover;
}

}
`
export default Footer