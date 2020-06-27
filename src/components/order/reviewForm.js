import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';

const ReviewForm = React.memo(props => {
	const { className, handleSubmit, subtotal } = props;
	let tax = 0.16;
	return (
		<form onSubmit={handleSubmit} className={`${className} review-form`}>
			<div className='review-form__legend'>
				<div className='review-form__legend__name'>Name</div>
				<div className='review-form__legend__quantity'>Quantity</div>
				<div className='review-form__legend__price'>Price</div>
			</div>
			<ReviewProducts className='review-form__products' />
			<div className='review-form__line' />
			<Field
				onClick={() => history.push('/information/shipping')}
				className='review-form__proceed'
				type='submit'
				title='Proceed to Checkout'
				name='proceed'
				component={FormButton}
			/>
			<Field
				className='review-form__back'
				onClick={() => history.push('/shop')}
				type='button'
				title='Back'
				name='back'
				short={true}
				component={FormButton}
			/>
			<div className='review-form__details review-details'>
				<div className='review-details__subtotal review-detail'>
					<div className='review-detail__title'>Subtotal</div>
					<div className='review-detail__price'>${subtotal}</div>
				</div>
				<div className='review-details__subtotal review-detail'>
					<div className='review-detail__title'>Tax</div>
					<div className='review-detail__price'>${tax}</div>
				</div>
				<div className='review-details__subtotal review-detail'>
					<div className='review-detail__title'>Shipping</div>
					<div className='review-detail__price'>$0.00</div>
				</div>
				<div className='review-details__total review-detail review-detail-green'>
					<div className='review-detail__title review-detail-green__title'>Total</div>
					<div className='review-detail__price review-detail-green__price'>${subtotal + tax}</div>
				</div>
			</div>{' '}
		</form>
	);
});

export default reduxForm({
	form: 'ReviewForm'
})(ReviewForm);
