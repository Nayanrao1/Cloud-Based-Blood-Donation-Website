import { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import {useTokenproviderContext} from './context/usercontext';
function Logout() {
  const {LogoutUser} = useTokenproviderContext();
  useEffect(() =>{
    LogoutUser();
  },[LogoutUser]);
  return (
    <Navigate to="/login"/>
  )
}

export default Logout