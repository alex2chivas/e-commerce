import React from 'react';

export const FormInput = props => {
	const { className, title, type, placeholder, input } = props;

	return (
		<div className={`${className} form-input`}>
			<label className='form-input__label'>{title}</label>
			<input className='form-input__input' type={type} placeholder={placeholder} {...input} />
		</div>
	);
};

export const FormButton = props => {
	const { className, title, type, onClick, input } = props;

	return (
		<div className={`${className} form-button`}>
			<button className={`form-button__button`} type={type} {...input} onClick={onClick}>
				{title}
			</button>
		</div>
	);
};
