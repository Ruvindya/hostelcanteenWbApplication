import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
//import Navbar from './pages/Navbar';
import Header from './Components/Header';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';
import Cart from './Components/Cart';


// import Home from "./pages/Home";
// import NewUser from "./pages/NewUser";
// import DeleteUser from "./pages/DeleteUser";
// import AddMenuItem from "./pages/AddMenuItem";
// import UpdateMenu from "./pages/UpdateMenu";
// import GetMenuBreakFastItem from "./pages/GetMenuBreakFastItem";
// import GetMenuLunchItem from "./pages/GetMenuLunchItem";
// import GetMenuDinnerItem from "./pages/GetMenuDinnerItem";
// import PlaceOrder from "./pages/Customor/PlaceOrder";
// import FoodContainer from "./pages/Customor/FoodContainer";
// import LoginSelect from './pages/LoginSelect'; 
// import LoginUser from './pages/LoginUser';
// import CustomorRegister from './pages/Customor/CustomorRegister';
// import GetOrderReport from "./pages/GetOrderReport";


function App() {
 
return (  
 
 
  <div className='App' >         
  <Router>
    <Header/>
   
    <Routes>

    <Route path="/Breakfast" exact element={<Breakfast/>} />
    <Route path="/Lunch" exact element={<Lunch/>} />
    <Route path="/Dinner" exact element={<Dinner/>} />
    <Route path="/Cart" exact element={<Cart/>} />

    </Routes>
    

   

  

      {/* <Route path="/" exact element={<Home/>} />
      <Route path="/NewUser" exact element={<NewUser/>} />
      <Route path="/DeleteUser" exact element={<DeleteUser/>} />
      <Route path="/AddMenuItem" exact element={<AddMenuItem/>} />
      <Route path="/UpdateMenu" exact element={<UpdateMenu/>} />
      <Route path="/GetMenuBreakFastItem" exact element={<GetMenuBreakFastItem/>} />
      <Route path="/GetMenuLunchItem" exact element={<GetMenuLunchItem/>} />
      <Route path="/GetMenuDinnerItem" exact element={<GetMenuDinnerItem/>} />
      <Route path="/PlaceOrder" exact element={<PlaceOrder/>} />
      <Route path="/FoodContainer" exact element={<FoodContainer/>} />
      <Route path="/LoginSelect" exact element={<LoginSelect/>} />
      <Route path="/LoginUser" exact element={<LoginUser/>} /> 
      <Route path="/CustomorRegister" exact element={<CustomorRegister/>} />
      <Route path="/GetOrderReport" exact element={<GetOrderReport/>} /> */}
      
      

   
  </Router>
  </div>

 );

}

export default App;
