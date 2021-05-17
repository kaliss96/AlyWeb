import React from 'react'
import img_wallets from '../../assets/alyCoin.png';
import "./wallet.css";


const userWallets = () => {
    return (
        <div className="col-1">
            <div className="sect-wallet">
                <div>
                    <img className='img_wallets' src={img_wallets} />
                </div>
                <div>
                    <p className="tittle-aly color-bold">AlyCoin</p>
                    <p className="letters-aly-wallet letters-aly">Precio del mercado</p>
                    <p className="letters-aly color-bold">$ 1.00</p>
                </div>
                <div>
                    <p className="letters-balance">Balance</p>
                    <p className="letters-balance color-bold">53,000.000 ALY</p>
                    <p className="letters-balance-wallet letters-balance">Balance USD</p>
                    <p className="letters-balance color-bold">$ 530,000.000</p>
                </div>
            </div>
        </div>
    )
}

export default userWallets;