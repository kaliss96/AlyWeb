import React, { useEffect } from "react"
import {Provider} from 'react-redux'
import store from './redux/store'
// import views
import Login from "./views/login.view"

// import router config
import { BrowserRouter } from "react-router-dom"
import GuestRoute from './components/Commons/GuestRoute'
import {fxLoadUser} from './redux/actions/auth'
import Dashboard from "./views/dashboard.view"
import Register from "./views/register.jsx"
import TableComponent from './components/table.component'

function App() {
  useEffect(function () {
    store.dispatch(fxLoadUser)
  }, [])

  return (
    <div className="App">
 
      <BrowserRouter>
          <Provider store={store}>
            <Dashboard/>
            <GuestRoute exact path = "/" component={Login}/> 
            <GuestRoute exact path = "/register" component={Register}/>
          </Provider>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
