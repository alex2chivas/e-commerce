import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import history from '../../history';
import CartProduct from './cartProuduct';
import * as actions from '../../actions';

import CartButton from './cartButton';

const CartContent = ({className, products, props}) => {
	let count = products.length;
	let productsJSX = products.map((product) => <CartProduct {...product} key={product._id} />);

	return (
		<div className={`${className} cart-content`}>
			<div className='cart-content__title'>Cart ({count})</div>
			<div className='cart-content__products'>{productsJSX}</div>
			<CartFooter className='cart-content__footer' products={products} props={props}/>
		</div>
	);
};

const CartFooter = ({className, products, props}) => {

	const subtotal = () => {
		let sub = 0;
		props.cartProducts.map(cartProduct => {
			sub += cartProduct.quantity * cartProduct.product.price;
		});
		return sub;
	};

	return (
		<div className={`${className} cart-footer`}>
			<a onClick={() => history.push('/order/review')} className='cart-footer__checkout'>
				Checkout
			</a>
			<div className='cart-footer__subtotal'>Subtotal</div>
			<div className='cart-footer__price'>${subtotal()}</div>
		</div>	
	);
};

const handleRemoveCart = () => {
	if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
		document.getElementById('shop-cart').classList.remove('cart-hidden');
	} else {
		document.getElementById('shop-cart').classList.add('cart-hidden');
	}
};

const ShopCart = (props) => {
	const {className} = props;

	useEffect(() => {
		props.fetchCartProducts();
	}, []);

	return (
		<div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
			<CartButton onClick={handleRemoveCart} className='shop-cart__toggle' icon='fas fa-times' />
			<CartContent className='shop-cart__content' products={props.cartProducts} props={props}/>
		</div>
	);
};

const mapStateToProps = (state) => {
	const {cartProducts} = state.user;
	return {cartProducts};
};

export default connect(mapStateToProps, actions)(ShopCart);
