import React from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

const Layout = props => {
	return (
		<div className='layout'>
			{props.children}
			<Header />
			<Navbar />
		</div>
	);
};

export default Layout;
