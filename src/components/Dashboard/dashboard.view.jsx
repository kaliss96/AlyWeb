import React, { Fragment } from 'react'
import TradePage from '../Pages/TradePage'
import Transaction from '../Pages/TransactionPage'
import WalletPage from '../Pages/WalletPage'
import './dashboard.css'

const Dashboard = () => {
    return (
        <Fragment>
            <div className="row mt-3">
                <div className="wallet col-4 wallet-border bg-gray">
                    <WalletPage />
                </div>

                <div className="transaction col-7 col-md-12 col-sm-12 section-border bg-gray">
                    {/* <TradePage /> */}
                    <Transaction />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;