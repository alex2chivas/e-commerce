import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import * as actions from '../../actions';

import PaymentForm from './paymentForm';

const Payment = props => {
	useEffect(() => {
		props.setNavbarLinks([]);
		props.setHeaderLinks([]);
	}, []);

	const onSubmit = fields => {
		console.log(fields);
	};

	return (
		<div className='payment'>
			<PageTitle className='payment__page-title' title='Payment Information' />
			<PaymentForm onSubmit={onSubmit} className='payment__form' />
		</div>
	);
};

export default connect(null, actions)(Payment);
