import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";

function App() {
return (
 <div className='App'> 

  <Router>
    <Link to = "/HomePage"> Go to home | </Link>

    <Link to = "/NewUser"> Create new User</Link>
    <Routes>
      <Route path="/HomePage" exact element={<Home/>} />
      <Route path="/NewUser" exact element={<NewUser/>} />
    </Routes>
  </Router>
 </div> 
 );


}

export default App;
