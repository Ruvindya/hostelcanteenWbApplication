
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

//not completed
function LoginCustomer() {

    const navigate = useNavigate();

    const [cusID, setcusID] = useState("");

    const [cusName, setcusName] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');
    const[listOfcustomer, setListOfCustomer] = useState([]);

    useEffect(()=>{
      axios.get(`http://localhost:3001/InfoCustomer/getcustomerbyphoneNo/${phoneNo}`).then((response) => {
        console.log(response.data);
        setListOfCustomer(response.data);
      })
  },[]);


    const CustomerLogin =  async (e)=>{
      e.preventDefault();
  

      //venas karanna one meva 
         try {
          await axios.post('http://localhost:3001/login/student', {  
            cusName: cusName,
            phoneNo: phoneNo,
          })
          .then((response) => {
  
            if(response.data.message){
              setLoginStatus(response.data.message);
             
            }
            else{
             // setLoginStatus(response.data[0].email);
              navigate("/studentDashboard" ,{ state: {cusID : cusID }} );
            }
  
          })
          
      } catch (error) {
          if(error.response.data.message){
            setLoginStatus(error.response.data.message);
          }
          else{
            setLoginStatus(error.response.data[0].email);
          }
  
  
     console.log(error);
      }
    
    }

    return (
   
    
        <form  className="login" onSubmit={CustomerLogin} >      
            <div className="loginCustomer" >
              <h1>Login as Customer</h1>
      
              <label>CustomerName</label>
                <input type="text" placeholder=" " name="cusName" required  
                value={cusName}  onChange={(e) => setcusName(e.target.value)} 
                />
              <label>phone Number</label>
                <input type="text" placeholder="Ex:abc123" name="phoneNo" required
                value={phoneNo} onChange={(e) => setphoneNo(e.target.value)}
                />
      
              <button   type="submit"   >Login</button>
            </div>
      
             <h6>{loginStatus}</h6>
          </form>
        
        );

}
export default LoginCustomer;