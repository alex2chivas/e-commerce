import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

const SignInForm = props => {
	const { className } = props;

	return (
		<form className={`${className} sign-in-form`}>
			<Field
				className='sign-in-form__email'
				type='email'
				title='Email'
				placeholder='Email'
				name='email'
				component={FormInput}
			/>
			<Field
				className='sign-in-form__email'
				type='password'
				title='Password'
				placeholder='Password'
				name='password'
				component={FormInput}
			/>
		</form>
	);
};

export default reduxForm({
	form: 'SignInForm'
})(SignInForm);
