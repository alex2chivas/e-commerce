import React from 'react';
import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

const subtotal = props => {
    let sub = 0;
    props.cartProducts.map(cartProduct => {
        sub += cartProduct.quantity * cartProduct.product.price;
    });
    return sub;
};

const amtStickers = props => {
    let totalStickers = 0;
    props.cartProducts.map(cartProduct => {
        totalStickers += cartProduct.quantity
    });
    return totalStickers;
}

const OrderSummary = props => {
	const { className } = props;
    let tax = 0.16;
    
	return (
		<div className={`${className} order-summary`}>
			<UnderlinedTitle className='order-summary__title' title='Order Summary' />
			<InfoTitle
				className='order-summary__subtotal'
				title={`${amtStickers(props)} stickers`}
				value='$7.96'
				value={`${subtotal(props)}`}
			/>
			<InfoTitle
				className='order-summary__tax-shipping'
				title='Taxes & Shipping'
				value={`${tax}`}
			/>
			<InfoTitle
				className='order-summary__total info-title-green'
				title='Total'
				value={`$${subtotal(props) + tax}`}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	const { cartProducts } = state.user;
	return {
		cartProducts
	};
};

export default connect(mapStateToProps)(OrderSummary);
