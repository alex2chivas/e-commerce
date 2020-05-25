import React from 'react';

const Layout = props => {
	return (
		<div className='app'>
			<h1>Ecom</h1>
			{props.children}
		</div>
	);
};

export default Layout;
