import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login";

function App() {
return (
 <div className='App'> 

  <Router>
    <Link to = "/HomePage"> Go to home | </Link>
    <Link to = "/NewUser"> New User | </Link>
    <Link to = "/Loggin"> login</Link>
    <Routes>
      <Route path="/HomePage" exact element={<Home/>} />
      <Route path="/NewUser" exact element={<NewUser/>} />
      <Route path="/Loggin" exact element={<Login/>} />
    </Routes>
  </Router>
 </div> 
 );


}

export default App;
