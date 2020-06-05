import React from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountInformationFrom';

const AccountInformation = () => {
	const onSubmit = fields => {
		console.log(fields);
	};

	return (
		<div className='account-information'>
			<PageTitle className='account-information' title='Account Information' />
			<AccountInformationForm onSubmit={onSubmit} className='account-information__form' />
		</div>
	);
};

export default AccountInformation;
