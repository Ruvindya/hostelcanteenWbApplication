import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../../App.css";
import { useLocation , useNavigate} from "react-router-dom";

function PlaceOrder() {

  const location = useLocation();
  const cusId= location.state.cusId;
  console.log(cusId);

   const BLD ='B';

  const [listOfItems, setListOfItems] = useState([]);
  const [customer, setCustomer] = useState([]);

//set table values with Breakfast items
    useEffect(() => {
      axios.get(`http://localhost:3001/InfoMenu/bybld/${BLD}`).then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });
//get customer details
      axios.get(`http://localhost:3001/InfoCustomer/getcustomerbyid/${cusId}`).then((response) => {

        setCustomer(response.data)
        console.log(customer)
        
        });

    }, []);




    //orderDetails table attributes
    const [menuID, setMenuID] = useState(); //order
    const [qty, setQty] = useState();
    const [totPrice, setTotPrice] = useState(0);
   
    var [CalPrice, setCalPrice] = useState(0);
    var [totAmount, settotAmount] = useState(0);
    const [orderId, setorderId] = useState(cusId);

    
    //final price
    const [finalPrice, setFinalPrice] = useState("Rs.0.00 /=");

   //BLD for order table

//CalPrice =0;

  const AddItem = async (e) => {
    e.preventDefault();
    

    try {
        await axios.post('http://localhost:3001/InfoOrderDetail/postOderDetails', {  
          
        menuID:menuID,
        qty:qty,
        totPrice:totPrice,
        orderId:orderId,
        })
        
    } catch (error) {
   console.log(error);
   setTotPrice(0);
setQty(0);
    }

}

const ConfirmOrder = async (e) => {
  e.preventDefault();
  try {
      
      await axios.post('http://localhost:3001/Infocustomerbill/postOder', {  
        BLD:BLD,
        totAmount:totAmount,
      })
      
  } catch (error) {
 console.log(error);
  }
}




//add item ebuvama mulinma enne mekata
const calculateTotal = (e) => {
  e.preventDefault();


    listOfItems.map((val) => {
      if (val.menuID == menuID) {
        // setitemName(val.itemName);
        if(val.isAvailabe === "true"){
          var CalPrice= val.price * qty;
          setTotPrice(CalPrice);
          // setCalPrice(val.price * qty);
          console.log("cal price ekaaa"+CalPrice);

          //this tot price didnt calculate value. only take unit ones price
           
          console.log("totPrice price ekaaa"+CalPrice);
          settotAmount(CalPrice);
          console.log("totAmount price ekaaa"+CalPrice);
          

          //methani oder item eke tot eka calclate karanava
          // setCalPrice("Rs. " + CalPrice + ".00 /=");
          //finalPrice = finalPrice + (qty * val.price);
          //console.log(finalPrice);
         
          //  {ConfirmOrder(e)};

           {AddItem(e)};
          

        }
        else{
          alert("Item is not available Today !!");
        }
        
      }
      else{
        // alert("No Item excist !!");
      }
    });  

    //this tot Price take the earlier value entered by same customer
console.log("else eken eliyata awaa.."+ totPrice);
}

//create this for when add multi items to order

// const addItem = async (e) => {
//     console.log("OKkk");
//     try {
//         await axios.post("http://localhost:3001/InfoOrderDetail/postOderDetails", {  
//             orderId:cusId,
//             menuID: menuID,
//             qty:qty,
//             totPrice:totPrice,
//         })        
//     } catch (error) {
//    console.log(error);
//     }
// }

  return (
   
  <form  className="PlaceOrderForm" onSubmit={calculateTotal}  >

      <h1>Order Yout Breakfast</h1>
    
      <div className='customor-details'>
                    {customer.map((value,key)=>(
                    <td className='columnData-placeorder'> <h3>Hello {value.cusName} ,</h3></td>     
                ))}     
      </div> 

    <div className="orderDetails" >
      
                  <h5>Place your order</h5>

                  <label> Items </label>
                  <select name="menuID" id="menuID" onChange={(e) => setMenuID(e.target.value)}>
                    <option value="" >Select Item</option>
                    <option value='1' >Rice</option>
                    <option value='2' >Parata</option>
                    <option value='3' >String Hoppers</option>
                    <option value='4' >Noodels</option>
                                
                  </select>

                  <label>Quantity</label>
                  <input type="number" placeholder="Ex:1" name="qty" required
                  value={qty} onChange={(e) => setQty(e.target.value) }
                  />

                  {/* <label>Totel Price </label> */}
                
                   <td className='columnData-placeorder'> <h3>{totPrice}</h3></td>     

                 
                
                  <button   type="submit"  >AddItem</button>
                  <button   type="submit" onClick={ConfirmOrder} >ConfirmOrder</button>

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