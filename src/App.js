import React, { useEffect } from "react"
import {Provider} from 'react-redux'
import store from './redux/store'
// import views
import Login from "./components/Auth/Login";

// import router config
import { BrowserRouter} from "react-router-dom"
import GuestRoute from './components/Commons/GuestRoute'
import PrivateRoute from './components/Commons/PrivateRoute'
import { loadUser } from './redux/actions/auth'
import Dashboard from "./components/Dashboard/dashboard.view"
import Register from "./components/Auth/Register.jsx"

const App = ({location}) => {

  useEffect(()=> {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
          <Provider store={store}>
            <PrivateRoute location={location} exact path = "/dashboard" component={Dashboard}/>
            <GuestRoute location={location} exact path = "/" component={Login}/> 
            <GuestRoute location={location} exact path = "/register" component={Register}/>
          </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
