
import './App.css';
import Home from "./Components/Homepage/home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { useState } from 'react';

function App() {
  const [user, setUserLogin]=useState({})


return (

  <div className='App'>
<Router>
  <Switch>
    <Route exact path="/">
      {
user && user._id ? <Home setUserLogin={setUserLogin}/> : <Login setUserLogin={setUserLogin} />
      }
  </Route>


    <Route path="/register"><Register/></Route>
    <Route path="/login" setUserLogin={setUserLogin}><Login/></Route>
  </Switch>
</Router>



   
{/* <Home/>
<Login/>
<Register/> */}
    </div>


   
  );
}

export default App;
