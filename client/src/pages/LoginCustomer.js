
import React ,{useState } from 'react';

function LoginCustomer() {
    
    const [cusName, setcusName] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');

    return (
   
    
        <form  className="login" >      
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