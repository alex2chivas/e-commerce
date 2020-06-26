import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/headernavbar';

const Navbar = (props) => {
	const handleOnClick = (link) => {
		props.changeNavbarActive(link._id);
		if (props.onClick) {
			props.onClick(link._id);
		}
	};

	return (
		<div className='navbar'>
			{props.navbarLinks.map((link, index) => {
				return (
					<a
						className={`navbar__link ${link.active ? 'green-text' : ''}`}
						key={index}
						onClick={() => handleOnClick(link)}
					>
						{link.title}
					</a>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	const { navbarLinks, onClick } = state.headerNavbar;
	return {
		navbarLinks,
		onClick,
	};
};

export default connect(mapStateToProps, actions)(Navbar);
