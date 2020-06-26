import React from 'react';
import {connect} from 'react-redux';

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

import * as actions from '../../actions';

const ShopProduct = (props) => {
	const handleAddToCart = () => {
		if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
			document.getElementById('shop-cart').classList.remove('cart-hidden');
			const {_id, title, description, price, belongs, imageUrl} = props;
			props.addCartProduct({_id, title, description, price, belongs, imageUrl});
		} else {
			document.getElementById('shop-cart').classList.add('cart-hidden');
		}
	};

	const {_id, title, description, price} = props;
	return (
		<div className='shop-product'>
			<div className='shop-product__front'>
				<img className='shop-product__front__image' src='http://via.placeholder.com/220x220' />
				<div className='shop-product__front__title'>{title}</div>
			</div>
			<div className='shop-product__back'>
				<div className='shop-product__back__title'>{title}</div>
				<div className='shop-product__back__description'>{description}</div>
				<GreenPriceTag className='shop-product__back__price' title={price} />
				<Quantity className='shop-product__back__quantity' quantity={1} />
				<a className='shop-product__back__add-to-cart' onClick={handleAddToCart}>
					Add to Cart
				</a>
			</div>
		</div>
	);
};

export default connect(null, actions)(ShopProduct);
