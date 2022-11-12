import React from 'react';
import logo from "../logo2.png"
import { useNavigate} from "react-router-dom";
// import axios from "axios";
// import {useEffect, useState} from "react";
//import { useNavigate} from "react-router-dom";
import '../App.css';

function Home(){
  const navigate = useNavigate();
  const PlaceOrder = async (e) => {
    e.preventDefault();
    try {
      navigate("/CustomorRegister");    
    
                  
    } catch (error) {
   console.log(error);
    }
}

  return (
    <form >
    <div id="home">
        
        <h1 className='hungry'>HUNGRY!?</h1>
        <h4 className='Lets Dine In..'>Lets Dine In..</h4>
         <img className="logoHome" src={logo} alt="logo..."></img> 
         <button   type="submit"  onClick={PlaceOrder} >Place Order</button>
           <div className='user' >

          
</div> 
    </div>
    </form>
  )
}

export default Home