import React from 'react';
import axios from "axios";
import "../../App.css";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useLocation , useNavigate} from "react-router-dom";

function SelectMeal() {
    const location = useLocation();
    const cusId= location.state.cusId;
    console.log(cusId);



    const navigate = useNavigate();

    const Breakfast = async (e) => {
        e.preventDefault();
        try {
            navigate("/PlaceOrder", { state: { cusId:cusId } });
            //, { state: { cusId:response.data.cusId } }
    
        } catch (error) {
       console.log(error);
        }
    }

    const Lunch = async (e) => {
        e.preventDefault();
        try {
            navigate("/CustomorRegister");
    
        } catch (error) {
       console.log(error);
        }
    }
    const Dinner = async (e) => {
        e.preventDefault();
        try {
            navigate("/CustomorRegister");
    
        } catch (error) {
       console.log(error);
        }
    }

    

    return (
        <form  className="form"  >
     
    
      <div className='customor-details'>

      <button   type="submit" onClick={Breakfast} >Breakfast</button>
      <button   type="submit" onClick={Lunch} >Lunch</button>
      <button   type="submit" onClick={Dinner} >Dinner</button>
      
      </div>
      </form>
    );
}
    export default SelectMeal;