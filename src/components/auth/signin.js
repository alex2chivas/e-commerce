import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';
import * as actions from '../../actions';

const SignIn = props => {
	useEffect(() => {
		props.setNavbarLinks([]);
		props.setHeaderLinks([]);
	}, []);

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

export default connect(null, actions)(SignIn);
