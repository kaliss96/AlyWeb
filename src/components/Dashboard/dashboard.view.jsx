import React, { Fragment, useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
// import TradePage from '../Pages/TradePage'
import Transaction from '../Pages/TransactionPage'
import WalletPage from '../Pages/WalletPage'
import './dashboard.css'
import {connect} from 'react-redux'
import { redux_get_wallets, redux_details_wallets,redux_verify_wallets,loadSearchText } from '../../redux/actions/wallet'
import store from '../../redux/store'

const Dashboard = ({redux_get_wallets, redux_details_wallets,redux_verify_wallets,loadSearchText}) => {
	
    useEffect(()=>{
        redux_get_wallets()
		
        setTimeout(() => {
            redux_details_wallets(51)
        }, 100);
    }, [redux_get_wallets, redux_details_wallets])

	const HandleBusqClick=(filtro)=>{
		loadSearchText(filtro)
		redux_verify_wallets("e33d17a1a92240beb0799298c3a9b5beba4542f56dd45fdbdb2a4ad606dd0c337c6bfa1c980c4e467d8f113d9c2992284163fdb180beae882df46c9178937d0d");
	}

	return (
        <Fragment>
            <div className="rps-navb">
                <Navbar handleSearch={HandleBusqClick}/>
            </div>
            <div className="row mt-3">
                <div className="wallet col-wall wallet-border bg-gray">
                    <h1 className="text-white tittle-wallet-module">Billetera</h1>
                    <WalletPage />
                </div>

                <div className='transaction col-dash section-border bg-gray'>
                    {/* <TradePage /> */}
                    <Transaction />
                </div>
            </div>
        </Fragment>
    )
}

const storeRedux = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(storeRedux,{redux_get_wallets, redux_details_wallets,redux_verify_wallets,loadSearchText})(Dashboard);