import React from 'react'
import axios from "axios";
import "../../App.css";
import {useEffect, useState} from "react";
import { useLocation , useNavigate} from "react-router-dom";

const FoodContainer = () => {
    
    const [listOfItems, setListOfItems] = useState([]);
    const [customer, setCustomer] = useState([]);

    const location = useLocation();
    const cusId= location.state.cusId;
    const BLD ='B';

    //set table values with Breakfast items
    useEffect(() => {
        axios.get(`http://localhost:3001/InfoMenu/bybld/${BLD}`).then((response) => {
          
          setListOfItems(response.data)
          console.log(response.data)
    
        });
  //get customer details
        axios.get(`http://localhost:3001/InfoCustomer/getcustomerbyid/${cusId}`).then((response) => {
  
          setCustomer(response.data)
          console.log(customer)
          
          });
  
      }, []);

  return (
    <div>FoodContainer</div>
  )
}

export default FoodContainer