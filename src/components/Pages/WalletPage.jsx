import React, { Fragment } from 'react'
import SectionWallet from '../Wallets/section-wallet.view';
import './WalletPage.css'
import {connect} from 'react-redux'

const WalletPage = ({ wallets_fr}) => {

    const wallets = wallets_fr !== null && wallets_fr.length > 0 ? 
        wallets_fr.map((wallet, index)=>{

        return (<div key={index} className="separator">
            <SectionWallet wallet={wallet}/>
        </div>)
        
        })
    : null

    return(
        <Fragment>
            { wallets_fr !== null ? wallets : null}
        </Fragment>
    )
}

const storeRedux = state =>({
    wallets_fr: state.wallets.wallets
})

export default connect(storeRedux)(WalletPage);