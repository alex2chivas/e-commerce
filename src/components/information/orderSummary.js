import React from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

const OrderSummary = ({className}) => {
    return (
        <div className={`${className} order-summary`}>
            <UnderlinedTitle className='order-summary__title'/>
            <InfoTitle className='order-summary__subtotal' title='4 stickers' value='$7.96'/>
            <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value='$0.00'/>
            <InfoTitle className='order-summary__total' title='Total' value='$8.02'/>
        </div>
    );
}

export default OrderSummary;
