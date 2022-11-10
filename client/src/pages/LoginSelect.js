
import {useNavigate} from 'react-router-dom';



function LoginSelect() {
    const navigate = useNavigate();

    const Customor = async (e) => {
        e.preventDefault();
        try {
            navigate("/LoginCustomer");            
        } catch (error) {
       console.log(error);
        }
    }
    const  Owner= async (e) => {
        e.preventDefault();
        try {
            navigate("/LoginUser");            
        } catch (error) {
       console.log(error);
        }
    }

    return (
        <div className="login-select">
            <h1>Are you a Customor or a Resturant Owner?</h1>
           <button onClick={Customor}>Customor</button>
            <button onClick={Owner}>Resturant Owner</button>
        </div>

    );



}
export default LoginSelect;

