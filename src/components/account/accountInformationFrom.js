import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton, LongGrayButton } from '../formFields';

const AccountInformationForm = (props) => {
	const [showPasswords, setShowPasswords] = useState();
	const { className, handleSubmit } = props;

	return (
		<form
			onSubmit={handleSubmit}
			className={`${className} account-information-form`}
		>
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
			<div className='account-information-form__line' />
			{showPasswords ? (
				[
					<Field
						key={0}
						className='account-information-form__current'
						type='password'
						title='Current Password'
						placeholder='Current Password'
						name='current'
						component={FormInput}
					/>,
					<Field
						key={1}
						className='account-information-form__new'
						type='password'
						title='New Password'
						placeholder='New Password'
						name='new'
						component={FormInput}
					/>,
					<Field
						key={2}
						className='account-information-form__confirm'
						type='password'
						title='Confirm Password'
						placeholder='Confirm Password'
						name='confirm'
						component={FormInput}
					/>,
					<Field
						key={3}
						onClick={() => setShowPasswords(false)}
						className='account-information-form__update-information'
						type='submit'
						title='Update Information'
						name='update-information'
						component={FormButton}
					/>,

					<Field
						key={4}
						className='account-information-form__cancel'
						onClick={() => setShowPasswords(false)}
						type='button'
						title='Cancel'
						name='cancel'
						short={true}
						component={FormButton}
					/>,
				]
			) : (
				<Field
					onClick={() => setShowPasswords(true)}
					className='account-information-form__change-password'
					type='button'
					labelTitle='Password'
					title='Change password'
					name='change-password'
					component={LongGrayButton}
				/>
			)}
		</form>
	);
};

export default reduxForm({
	form: 'AccountInformationForm',
})(AccountInformationForm);
