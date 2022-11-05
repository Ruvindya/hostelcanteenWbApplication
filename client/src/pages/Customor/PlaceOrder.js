import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../../App.css";
import { useLocation , useNavigate} from "react-router-dom";

function PlaceOrder() {

  const [listOfItems, setListOfItems] = useState([]);
  const [listOfcustomer, setListOfCustomer] = useState([]);

  const location = useLocation();
  const cusId= location.state.cusId;
  
  //get Breakfast menue Items
  const BLD ='B';

    useEffect(() => {
      axios.get(`http://localhost:3001/InfoMenu/bybld/${BLD}`).then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });
    }, []);

    //orderDetails table attributes
    const [menuID, setMenuID] = useState(); //order
    const [qty, setQty] = useState();
    const [totPrice, setTotPrice] = useState();
    // const [BLD, setBLD] = useState();
    
    const [itemName, setitemName] = useState();
    const [price, setprice] = useState();
    const [isAvailabe, setisAvailabe] = useState(); 
  

   //BLD for order table
   //totAmount have to calculate


//   const ConfirmOrder = async (e) => {
//     e.preventDefault();
  

//     try {
//         await axios.post('http://localhost:3001/InfoCustomer/postcustomer', {  
//           cusName:cusName,
//             block: block,
//             roomNo:roomNo,
//             phoneNo: phoneNo,
//         })
        
//     } catch (error) {
//    console.log(error);
//     }
// }



// const showMenu = async (e) => {
//   e.preventDefault();


//   try {
//       await axios.post('http://localhost:3001/InfoMenu/${B}', {  
//         cusName:cusName,
//           block: block,
//           roomNo:roomNo,
//           phoneNo: phoneNo,
          

//       })
      
//   } catch (error) {
//  console.log(error);
//   }  
// }
  
// useEffect(() => {
//   axios.get(`http://localhost:3001/InfoCustomer/getcustomer/${cusId}`).then((response) => {
//     console.log(response.data);
//     setListOfCustomer(response.data);
//   });
// }, []);
//

const addItem = async (e) => {
    e.preventDefault();
  
    console.log("OKkk");
    try {
      // await axios.post("http://localhost:3001/InfoCustomer/postcustomer", {  
        
      //       cusName:cusName,
      //       block: block,
      //       roomNo:roomNo,
      //       phoneNo:phoneNo,

      //   })


      
       
      

        await axios.post("http://localhost:3001/InfoOrderDetail/postOderDetails", {  
            orderId:cusId,
            menuID: menuID,
            qty:qty,
            totPrice:totPrice,
        })


        
    } catch (error) {
   console.log(error);
    }
     
}

  return (
   

  <form  className="PlaceOrderForm" onSubmit={addItem} >
      <h1>Place Breakfast Order</h1>
    


    <div className="orderDetails" >

                  <h5>Fill order details</h5>

                  <label>menuID</label>
                  <input type="text" placeholder="Ex:001" name="menuID" required
                  value={menuID} onChange={(e) => setMenuID(e.target.value)}
                  />

                  <label>qty</label>
                  <input type="text" placeholder="Ex:1" name="qty" required
                  value={qty} onChange={(e) => setQty(e.target.value)}
                  />

                  <label>totPrice</label>
                  <input type="text" placeholder="EX:0" name="totPrice" required
                  value={totPrice} onChange={(e) => setTotPrice(e.target.value)}
                  />

                  <button   type="submit"  >addItem</button>
                  {/* <button   type="submit" onSubmit={ConfirmOrder} >ConfirmOrder</button> */}

    </div>

    <div className='seeMenu'>
            <button   type="submit"  >showMenu</button>
    </div>

    <div className='MenuItems'>

        <table>
                <tr>
                    <td className='columnName'><h3>menuID</h3></td>
                    
                    <td className='columnName'><h3>ItemName</h3></td>
                    <td className='columnName'> <h3>Price</h3></td>
                    <td className='columnName'> <h3>isAvailabe</h3></td>
                </tr>

                {listOfItems.map((value,key)=>(
                <tr key={key}>
                    <td className='columnData'>{value.menuID} </td> 
                    
                    <td className='columnData'>{value.itemName}</td>
                    <td className='columnData'>{value.price}</td>
                    <td className='columnData'>{value.isAvailabe}</td>
                    
                </tr>

                ))}
        </table>
</div> 


    </form>

    
  
  );
}

export default PlaceOrder;