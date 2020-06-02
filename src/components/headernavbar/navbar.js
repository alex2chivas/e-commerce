import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/headernavbar';

const Navbar = props => {
	return (
		<div className='navbar'>
			{props.navbarLinks.map((link, index) => {
				return (
					<a
						className={`navbar__link ${link.active ? 'green-text' : ''}`}
						key={index}
						onClick={() => props.changeNavbarActive(link._id)}
					>
						{link.title}
					</a>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	const { navbarLinks } = state.headerNavbar;
	return {
		navbarLinks
	};
};

export default connect(mapStateToProps, actions)(Navbar);
