import React from 'react';
import ComponentImage from "../components/image.component";
import CustomLabel from "../components/label.component";

// Import assets
import alyCoin from '../assets/alyCoin.png';
import Balance from './balance.component';

export default function SendFounds() {
	
	return (
        <div>
            <Balance />
            <div class='some-page-wrapper'>
                <div class='row'>
                    <div class='column'>
                        <div class='blue-column'>
                            Some Text in Column One
                        </div>
                    </div>
                    <div class='column'>
                        <div class='green-column'>
                            Some Text in Column Two
                        </div>
                    </div>
                </div>
            </div>
        </div>

	)
}
