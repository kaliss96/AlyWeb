import React, { Fragment } from "react";
import "./wallet.css";
import img_wallets from '../../assets/alyCoin.png';
import { connect } from 'react-redux';
import { loadStateComp, redux_details_wallets } from '../../redux/actions/wallet'

const SectionWallet = ({wallet, loadStateComp, statecomp, redux_details_wallets, currentWallet,wallet_verify}) => {

  const handleOnClick = id =>{
    loadStateComp(!statecomp)
    console.log('id wallet seleccionada', id)
    redux_details_wallets(id)
  }

  return (
    <Fragment>
      <div className={`container-wallet ${currentWallet === wallet.id ? 'component__content' : 'activater'}`} onClick={()=>handleOnClick(wallet.id)}>
        <div className="section-wallet">
          <div className="content-img-wallet">
            <img  title={wallet_verify.city}  className='img_wallets' src={wallet._id === null ? img_wallets: wallet.img} alt="alycoin"/>
          </div>
          <div className="content-center">
            <p className="tittle-aly color-bold">{wallet.description}</p>
            <p className="letters-aly-wallet letters-aly">Precio del mercado</p>
            <p className="letters-aly color-bold">$ {Number.parseFloat(wallet.price).toFixed(2)}</p>
          </div>
          <div className="content-rigth">
            <p className="letters-balance">Balance</p>
            <p className="letters-balance color-bold">53,000.000 {wallet.symbol}</p>
            <p className="letters-balance-wallet letters-balance">Balance {wallet.symbol}</p>
            <p className="letters-balance color-bold">{wallet.amount}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  statecomp: state.wallets.statecomp,
  currentWallet: state.wallets.currentWallet,
  wallet_verify: state.wallets.wallet_verify
});
export default connect(mapStateToProps,{loadStateComp, redux_details_wallets})(SectionWallet);