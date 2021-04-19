import React from 'react';
import ComponentImage from "./image.component";
import CustomLabel from "./label.component";

// Import assets
import alyCoin from '../assets/alyCoin.png';

export default function Balance() {
	
	return (
        <div>
            <div class="container-balance">
                <div className="coin__styles">
                    <ComponentImage src={alyCoin} className="img_dash" alt="img-coin" />
                    <CustomLabel type="text" className="text-aly">Alycoin</CustomLabel>
                </div>
                <div>
                    <p className="textTitleBal">Precio del mercado</p>
                    <p className="textContentBal">$ 1.00</p>
                </div>
                <div>
                    <p className="textTitleBal">Balance</p>
                    <p className="textContentBal">530,000.00 ALY</p>
                </div>
                <div>
                    <p className="textTitleBal">Balance USD</p>
                    <p className="textContentBal">$ 530,000.00</p>
                </div>
            </div>
        </div>
	)
}
