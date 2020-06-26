import React from 'react';

import GreenPriceTag from '../greenPriceTag';

const ReviewProduct = (props) => {
	const {product, quantity} = props;
	const {imageUrl, title, price} = product;
	return (
		<div className='review-product'>
			<img className='review-product__image' src={imageUrl} />
			<div className='review-product__title'>{title}</div>
			<div className='review-product__quantity'>{quantity}</div>
			<GreenPriceTag className='review-product__price' title={price * quantity} />
		</div>
	);
};

export default ReviewProduct;
