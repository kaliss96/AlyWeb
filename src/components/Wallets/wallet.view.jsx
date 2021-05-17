import React, { Fragment, useEffect } from 'react';
import SectionWallet from './section-wallet.view';
import './wallet.css'
import {connect} from 'react-redux'

const Wallet = ({}) => {
    return(
        <Fragment>
            <SectionWallet />
        </Fragment>
    )
}

const mapToStateToProps = state =>({})

export default connect(mapToStateToProps,{})(Wallet);