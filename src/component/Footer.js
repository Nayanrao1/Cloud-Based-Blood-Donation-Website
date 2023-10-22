import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <div class="footer">
            <p>&copy; 2023 Blood Donation Portal</p>
            <p>Contact us: example@email.com</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.footer {
  background: #242729; /* Dark background color, change as needed */
  height:400px;
  
}
`
export default Footer