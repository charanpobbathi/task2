import { GET_DETAILS } from '../Types';
import React,{ useReducer } from 'react';
import apiContext from './apiContext';
import apiReducer from './apiReducer';
import axios from 'axios';


 const ApiState = (props) => {

    const initialStates={

        data:null
     
    };

    const [state, dispatch] = useReducer(apiReducer, initialStates);


  const api = async() => {
        
    const call =await axios.get('https://reqres.in/api/users?page=1')
    console.log(call.data);
    dispatch({
    type:GET_DETAILS,
    payload:call.data

})
}


    return (
        <apiContext.Provider value={{
            data:state.data,
            api
            }}>
             {props.children}
        </apiContext.Provider>
    )
}

export default ApiState;