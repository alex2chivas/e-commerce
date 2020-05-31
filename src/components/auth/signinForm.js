import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

const SignInForm = props => {
	const { className, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
			<Field
				className='sign-in-form__email'
				type='email'
				title='Email'
				placeholder='Email'
				name='email'
				component={FormInput}
			/>
			<Field
				className='sign-in-form__password'
				type='password'
				title='Password'
				placeholder='Password'
				name='password'
				component={FormInput}
			/>
			<div className='sign-in-form__line' />
			<Field
				className='sign-in-form__login'
				onClick={() => console.log('trying to submit')}
				type='submit'
				title='Login'
				name='login'
				component={FormButton}
			/>
		</form>
	);
};

export default reduxForm({
	form: 'SignInForm'
})(SignInForm);
