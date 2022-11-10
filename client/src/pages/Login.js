import axios from "axios";
import React ,{useState } from 'react';
import logo from "../logo2.png"

import "../App.css";

function Login() {
 
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');


  const Login = async (e) => {
    e.preventDefault();



    try {
        await axios.post('http://localhost:3001/InfoUser', {  
          email: email,
          password: password,
        })

        .then((response) => {

          if(response.data.message){
            setLoginStatus(response.data.message); }
          else{
            setLoginStatus(response.data[0].email);
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
   
    
  <form  className="login" >
    <div className="App">

      <div className="login" >
        <h1>Login</h1>

        <label>Email</label>
          <input type="email" placeholder="Ex:email" name="email" required  
          value={email}  onChange={(e) => setEmail(e.target.value)} 
          />
        <label>Password</label>
          <input type="password" placeholder="Ex:abc123" name="password" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />

        <button   type="submit" onSubmit={Login}  >Login</button>
      </div>

       <h6>{loginStatus}</h6>

      
    </div> 
    

    </form>
  
  );
}

export default Login;