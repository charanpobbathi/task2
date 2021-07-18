import React from 'react';
import './App.css';
import ApiState from './context/getdetails/ApiState';
// import ApiContext from './context/getdetails/apiContext';
import Details from './components/Details';
import Nav from './components/Nav';

const App = () => {

  // const apiContext = useContext(ApiContext);

  // const {data,api} = apiContext;

  return (
 
    <ApiState>
        <Nav />
        <Details/>
    </ApiState>
  
  );

}

export default App;
