import React from 'react';
import { reduxForm, Field } from 'redux-form';

const FormSearchBar = (props) => {
	const { input, className, placeholder } = props;
	return (
		<div className='search-bar-grid'>
			<i className='fas fa-search search-bar-grid__icon'></i>
			<input
				className={`${className} form-search-bar search-bar-grid__input`}
				{...input}
				type='text'
				placeholder={`${placeholder}`}
			/>
		</div>
	);
};

const ShopSearchBar = (props) => {
	const { className, onSubmit, handleSubmit } = props;
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`${className} shop-search-bar`}
		>
			<Field
				name='query'
				className='shop-search-bar__form-search-bar'
				placeholder='Search'
				component={FormSearchBar}
			/>
		</form>
	);
};

export default reduxForm({
	form: 'ShopSearchBar',
})(ShopSearchBar);
