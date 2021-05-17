import React from 'react';
import ComponentImage from "../components/image.component";
import CustomLabel from "../components/label.component";

// Import assets
import alyCoin from '../assets/alyCoin.png';

export default function AlyCoins() {
	
	return (
        <div>
            <div className="billetera-item">
                <div className="imagen-item">
                    <ComponentImage src={alyCoin} alt="img-coin" />
                </div>
                
                <div className="contenido-item">
                    <div className="lado-izquierdo">
                        <p className="tittle-left-coin">Alycoin</p>
                        <p className="cont-left-coin">Precio del mercado</p>
                        <p className="money-left-coin">$ 1.00</p>
                    </div>
                    <div className="lado-derecho">
                    </div>
                </div>
            </div>
        </div>

	)
}
