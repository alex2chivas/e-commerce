import React from 'react';

const CartButton = ({className, icon, onClick}) => {
	return (
		<div onClick={onClick} className={`${className} cart-button`}>
			<i className={icon} />
		</div>
	);
};

export default CartButton;
