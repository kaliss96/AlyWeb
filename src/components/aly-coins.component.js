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
                    </div>
                    <div className="lado-derecho">
                    </div>
                </div>
            </div>
        </div>

	)
}
