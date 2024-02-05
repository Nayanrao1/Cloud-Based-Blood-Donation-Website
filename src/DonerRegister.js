import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserContext } from './context/usercontext';
import { NavLink } from 'react-router-dom';
function DonerRegister() {
    const {isLoading,isError,users,donerusers} = useUserContext();

  return (
    <Wrapper>
      
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood+-</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Click Here</th>
            <th>Delete User</th>
           
          </tr>
        </thead>
        <tbody>
          {donerusers.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.bloodGroup}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
              <td><NavLink to="/userprofile">View Profile </NavLink> </td>
              <td>Click Here</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
export default DonerRegister;