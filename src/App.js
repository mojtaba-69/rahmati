import { useSelector } from 'react-redux';
import Layout from './layout/Layout';
import Login from './views/pages/login/Login';
import {useEffect } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import "./styles/index.scss";




const App = () => {
  const {loginshow} = useSelector((state) => state.login);
  return (
    
    <BrowserRouter>
          <Routes>
       
               <Route path="*" name='Home' element={<Layout />}  /> 
               <Route exact path="/login" element={<Login />}  /> 
        
          </Routes>
      </BrowserRouter>
  );
};

export default App;
