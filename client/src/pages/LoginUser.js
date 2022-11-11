
import React ,{useState } from 'react';

function LoginUser() {
    
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');

    return (
   
        <form  className="login" >      
            <div className="loginCustomer" >
              <h1>Login as Owner</h1>
      
              <label>UserName</label>
                <input type="text" placeholder=" " name="userName" required  
                value={userName}  onChange={(e) => setuserName(e.target.value)} 
                />
              <label>password</label>
                <input type="text" placeholder="Ex:abc123" name="password" required
                value={password} onChange={(e) => setpassword(e.target.value)}
                />
      
              <button   type="submit"   >Login</button>
            </div>
      
             <h6>{loginStatus}</h6>
          </form>
        
        );

}
export default LoginUser;