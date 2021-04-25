import React, { useEffect } from "react"
import {Provider} from 'react-redux'
import store from './redux/store'
// import views
import Login from "./components/Auth/Login"

// import router config
import { BrowserRouter,Route,Redirect,Switch } from "react-router-dom"
import GuestRoute from './components/Commons/GuestRoutes'
import {fxLoadUser} from './redux/actions/auth'
import Dashboard from "./components/Dashboard/dashboard.view"
import Register from "./components/Auth/Register"
import Navbar from "./components/navbar.component"
import ReceiveFounds from "./components/Transactions/ReceiveTransaction.jsx";
import Error from './components/Error';

function App() {
  useEffect(function () {
    store.dispatch(fxLoadUser)
  }, [])

  return (
    <div className="App">
 
     <BrowserRouter>
	    
		<Navbar type="text" placeholder="Buscar Hash" className="prompt"/>
	
	<Switch> 
		 <Route path="/:nameFunc">
		  
            <GuestRoute isAuthenticated="1" exact path = "/register" component={Register}/>
            <GuestRoute isAuthenticated="1" exact path = "/login" component={Login}/>
            <GuestRoute isAuthenticated="1" exact path = "/error" component={Error}/>
            <GuestRoute isAuthenticated="1" exact path = "/inicio" component={Dashboard}/>
            <GuestRoute isAuthenticated="1" exact path = "/comercios" component={ReceiveFounds}/>
 
			
		</Route>
		<Route exact path="/">
		   <Redirect to="/login" />
		</Route>
		 
	 </Switch>
         
      </BrowserRouter>
 
    </div>
  );
}

export default App;
