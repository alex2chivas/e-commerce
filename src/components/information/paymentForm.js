import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton } from '../formFields';
import OrderSummary from './orderSummary';
import { UnderlinedTitle} from './infoHelp';

const PaymentForm = props => {
	const { className, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit} className={`${className} payment-form`}>
			<Field
				className='payment-form__name'
				type='name'
				title='Name on Credit Card'
				placeholder='Name'
				name='name'
				component={FormInput}
			/>
			<Field
				className='payment-form__card'
				type='card'
				title='Credit Card Number'
				placeholder='____-____-____-____'
				name='card'
				component={FormInput}
			/>

			<Field
				className='payment-form__expiration'
				type='expiration'
				title='Expiration Date'
				placeholder='expiration'
				name='expiration'
				component={FormInput}
			/>
			<Field
				className='payment-form__ccv'
				type='ccv'
				title='CCV'
				placeholder='CCV'
				name='ccv'
				component={FormInput}
			/>

			<div className='payment-form__line' />
			<Field
				className='payment-form__pay-complete'
				onClick={() => history.push('/information/payment')}
				type='submit'
				title='Pay & Complete'
				name='pay-complete'
				component={FormButton}
			/>
			<Field
				className='payment-form__back'
				onClick={() => history.push('/signin')}
				type='button'
				title='Back'
				name='back'
				short={true}
				component={FormButton}
			/>
			<OrderSummary className='payment-form__order-summary' />
			<div className='payment-form__shipping-info shipping-info'>
				<UnderlinedTitle className='payment-info__title' title='Shipping To' />
				<div className='shipping-info__name small-text'>Alexis Flores</div>
				<div className='shipping-info__address small-text'>1234 Addres goes here</div>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'PaymentForm'
})(PaymentForm);
