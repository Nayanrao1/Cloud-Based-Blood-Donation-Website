import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import userreducer from "../reducer/userreducer";
const AppContext = createContext();

const url = "http://localhost:3000/users";
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

export { AppContext, AppProvider, useUserContext };