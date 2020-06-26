import React from 'react';
import {connect} from 'react-redux';

import ReviewProduct from './reviewProduct';

const ReviewProducts = (props) => {
	const {className} = props;

	return (
		<div className={`${className} review-products`}>
			{props.cartProducts.map((cartProduct) => {
				return <ReviewProduct key={cartProduct._id} {...cartProduct} />;
			})}
		</div>
	);
};

const mapStateToPropas = (state) => {
	const {cartProducts} = state.user;
	return {
		cartProducts
	};
};

export default connect(mapStateToPropas)(ReviewProducts);
