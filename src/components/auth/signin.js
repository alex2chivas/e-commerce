import React from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

const SignIn = () => {
	const onSubmit = fields => {
		console.log(fields);
	};

	return (
		<div className='sign-in'>
			<div className='sign-in'>
				<PageTitle className='sign-in__page-title' title='Login' />
				<SignInForm onSubmit={onSubmit} className='sign-in__form' />
			</div>
		</div>
	);
};

export default SignIn;
