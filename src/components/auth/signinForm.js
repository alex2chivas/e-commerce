import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';

const SignInForm = props => {
	const { className, handleSubmit } = props;
	const links = [
		{
			_id: 0,
			title: 'Not Registered? Create account here',
			onClick: () => history.push('/signup')
		},
		{
			_id: 1,
			title: 'Forgot account email?',
			onClick: () => console.log('forgot email')
		},
		{
			_id: 2,
			title: 'forgot password?',
			onClick: () => console.log('forgot password')
		}
	];

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
				type='submit'
				title='Login'
				name='login'
				component={FormButton}
			/>
			<Details className='sign-in-form__details' title='QuickLinks' links={links} />
		</form>
	);
};

export default reduxForm({
	form: 'SignInForm'
})(SignInForm);
