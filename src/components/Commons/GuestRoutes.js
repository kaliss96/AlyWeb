import React from 'react';
import { Route, Redirect,useParams } from 'react-router-dom';

import { connect } from 'react-redux';
 const BRAND = {
	login: [],
	register: [],
	inicio: [],
	comercios: [],
	error: []
 
 
};

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	const { nameFunc } = useParams();
 
const enlace = BRAND[nameFunc];
  
	if (!enlace) {
		return <Redirect to="/error" />;
	}
 
   return  <Route
        {...rest}
         render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
        }
		
    />
	};
 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default GuestRoute;