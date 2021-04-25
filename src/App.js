import React, { useEffect } from "react"
import {Provider} from 'react-redux'
import store from './redux/store'
// import views
import Login from "./components/Auth/Login";

// import router config
import { BrowserRouter} from "react-router-dom"
import GuestRoute from './components/Commons/GuestRoute'
import {RDX_LOADUSER} from './redux/actions/auth'
import Dashboard from "./components/Dashboard/dashboard.view"
import Register from "./components/Auth/Register.jsx"

function App() {
  useEffect(function () {
    store.dispatch(RDX_LOADUSER)
  }, [])

  return (
    <div className="App">
 
      <BrowserRouter>
          <Provider store={store}>
            <GuestRoute exact path = "/dashboard" component={Dashboard}/>
            <GuestRoute exact path = "/" component={Login}/> 
            <GuestRoute exact path = "/register" component={Register}/>
          </Provider>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
