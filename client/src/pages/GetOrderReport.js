import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import "../App.css";
import {useNavigate} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function GetOrderReport() {


    const BLD ='B';
    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/InfoOrderDetail/getOrder/${BLD}`).then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });
    }, []);




  return (
   
  <form   >
    <div className="App">
<h2>Breakfast Order</h2>


            {/* <div className="SearchItemName" >

                <h1>Search by meal</h1>
                <h5>B-Breakfast L-Lunch D-Dinner</h5>

                <select name="BLD" className="custom-select" required value={BLD}  onChange={(e) => setBLD(e.target.value)}>

                            <option value="">Select Subject</option>
                            <option  value="B">B</option>
                            <option value="L">L</option>
                            <option value="D">D</option>

                            </select>

                <button type="submit" onSubmit={()=>GetItemDet}> Search </button>
            </div> */}
 
           

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Menu Id   |   </h3></td>
                                    {/* <td className='columnName'><h3>BLD   |  </h3></td> */}
                                    <td className='columnName'><h3>itemName   |   </h3></td>
                                    <td className='columnName'><h3>Count   |   </h3></td>
                                    
                                </tr>

                                {listOfItems.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.menuID} </td> 
                                    {/* <td className='columnData'>{value.BLD} </td>  */}
                                    <td className='columnData'>{value.itemName}</td>
                                    {/* <td className='columnData'>{count}</td> */}
                                    
                                   
                                </tr>


                                ))}
                      </table>
              

    </div> 
    </form>
  
  );
}

export default GetOrderReport;