import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

import * as actions from '../../actions';

const Review = props => {
	useEffect(() => {
		props.setHeaderLinks([]);
		props.setNavbarLinks([]);
	}, []);

	const onSubmit = fields => {
		console.log(fields);
	};

	const subtotal = () => {
		let sub = 0;
		props.cartProducts.map(cartProduct => {
			sub += cartProduct.quantity * cartProduct.product.price;
		});
		return sub;
	};

	return (
		<div className='review'>
			<PageTitle className='review__page-title' title='Order Review' />
			<ReviewForm className='review__form' onSubmit={onSubmit} subtotal={subtotal()} />
		</div>
	);
};

const mapStateToProps = state => {
	const { cartProducts } = state.user;
	return { cartProducts };
};

export default connect(mapStateToProps, actions)(Review);
