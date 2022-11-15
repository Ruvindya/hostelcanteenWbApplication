import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../../App.css";
import { useLocation , useNavigate} from "react-router-dom";

function PlaceOrderUsingHome() {

   //get Breakfast menue Items
   const BLD ='B';

  const [listOfItems, setListOfItems] = useState([]);
  const [customer, setCustomer] = useState([]);


    useEffect(() => {
      axios.get(`http://localhost:3001/InfoMenu/bybld/${BLD}`).then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });


    }, []);




    //orderDetails table attributes
    const [menuID, setMenuID] = useState(); //order
    const [qty, setQty] = useState();
    var [totPrice, setTotPrice] = useState("Rs.0.00 /=");
    // const [BLD, setBLD] = useState();
    
    const [itemName, setitemName] = useState();
    const [price, setprice] = useState();
    const [isAvailabe, setisAvailabe] = useState(); 
    
    //final price
    const [finalPrice, setFinalPrice] = useState("Rs.0.00 /=");


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




//add item ebuvama mulinma enne mekata
const calculateTotal = (e) => {
  e.preventDefault();






  

    listOfItems.map((val) => {
      if (val.menuID == menuID) {
        // setitemName(val.itemName);
        if(val.isAvailabe === "true"){

          //methani oder item eke tot eka calclate karanava
          setTotPrice("Rs. " +(qty * val.price) + ".00 /=");
          //finalPrice = finalPrice + (qty * val.price);
          //console.log(finalPrice);
        }
        else{
          alert("Item is not available Today !!");
        }
        
      }
      else{
        // alert("No Item excist !!");
      }
    });

console.log("else eken eliyata awaa.."+totPrice);
}

const addItem = async (e) => {

  
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
   

  <form  className="PlaceOrderForm" onSubmit={calculateTotal}  >
     
      <h1>Place Breakfast Order</h1>

    <div className="orderDetails" >
      
                  <h5>Fill order details</h5>

                  <label> Items </label>
                  <select name="menuID" id="menuID" onChange={(e) => setMenuID(e.target.value)}>
                    <option value="" >Select Item</option>
                    <option value='1' >Rice</option>
                    <option value='2' >String Hoppers</option>
                    <option value='3' >Kottu</option>
                    <option value='4' >Parotta</option>                
                  </select>

                  <label>Quantity</label>
                  <input type="number" placeholder="Ex:1" name="qty" required
                  value={qty} onChange={(e) => setQty(e.target.value)}
                  />

                  <label>Totel Price </label>
                
                   <td className='columnData-placeorder'> <h3>{totPrice}</h3></td>     

                 
                
                  <button   type="submit"  >Select Item</button>
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

export default PlaceOrderUsingHome;
