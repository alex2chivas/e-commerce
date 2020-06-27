import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';

const ReviewForm = props => {
	const { className, handleSubmit } = props;
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
				onClick={() => history.push('/signin')}
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
		</form>
	);
};

export default reduxForm({
	form: 'ReviewForm'
})(ReviewForm);
