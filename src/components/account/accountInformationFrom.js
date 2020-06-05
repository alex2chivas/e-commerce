import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton } from '../formFields';

const AccountInformationForm = props => {
	const { className, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit} className={`${className} account-information-form`}>
			<Field
				className='account-information-form__name'
				type='name'
				title='Name'
				placeholder='Name'
				name='name'
				component={FormInput}
			/>
			<Field
				className='account-information-form__email'
				type='email'
				title='Email'
				placeholder='Email'
				name='email'
				component={FormInput}
			/>

			<Field
				className='account-information-form__street-address'
				type='address'
				title='Street Address'
				placeholder='Street Address'
				name='address'
				component={FormInput}
			/>
			<Field
				className='account-information-form__city'
				type='city'
				title='City'
				placeholder='City'
				name='city'
				component={FormInput}
			/>

			<Field
				className='account-information-form__state'
				type='state'
				title='State'
				placeholder='State'
				name='state'
				component={FormInput}
			/>
			<Field
				className='account-information-form__zipcode'
				type='zipeCode'
				title='ZipeCode'
				placeholder='ZipeCode'
				name='zipeCode'
				component={FormInput}
			/>

			{/* <Field
				className='account-information-form__password'
				type='password'
				title='Password'
				placeholder='Password'
				name='password'
				component={FormInput}
			/>
			<Field
				onClick={() => history.push('/account')}
				className='account-information-form__login'
				type='submit'
				title='Login'
				name='login'
				component={FormButton}
			/> */}
		</form>
	);
};

export default reduxForm({
	form: 'AccountInformationForm'
})(AccountInformationForm);
