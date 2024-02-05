import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import userreducer from "../reducer/userreducer";
const AppContext = createContext();
const Authcontext = createContext();
const url = "http://localhost:3000/api/auth/users";
const AppProvider = ({ children }) => {
    const initialstate = {
        isLoading: false,
        isError: false,
        users:[],
        donerusers:[],
    }
    const [state, dispatch] = useReducer(userreducer, initialstate);

    const getUsers = async (url) => {
        console.log(url);
        dispatch({type:"SET_LOADING"});
        try{
        const res = await axios.get(url);
        console.log(res);
        const products = await res.data;
        console.log(products);
        dispatch({type:"MY_API_DATA", payload:products});
        } catch(error){
            dispatch({type:"API_ERROR"});
        }
        
    };

    useEffect(() => {
        console.log("useeffect ran");
        getUsers(url);
    }, []);
    
    return (
        <AppContext.Provider value={{...state}} >
            {children}
        </AppContext.Provider>
    )
};

const useUserContext = () => {
    return useContext(AppContext);
};
// tokenprovider context.......
////////////////////////////////////////////////
const TokenProvider = ({ children })=>{
    const [token, settoken]= useState(localStorage.getItem('token'));
    const storeToken=(token)=>{
        return  localStorage.setItem('token', token);
    }
    const isLoggedin = !!token;
    const LogoutUser =()=>{
        settoken("");
        return localStorage.removeItem('token');
    }
    return (
        <Authcontext.Provider value={{storeToken,token, LogoutUser, isLoggedin}} >
            {children}
        </Authcontext.Provider>
    )
}
const useTokenproviderContext=()=>{
    return useContext(Authcontext);
}
export { AppContext, AppProvider,TokenProvider, useUserContext, useTokenproviderContext };