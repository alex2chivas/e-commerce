import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';

const Header = props => {
	return (
		<div className='header'>
			<img className='header__img' src='http://via.placeholder.com/50x50' />
			<div className='header__links'>
				{
					props.headerLinks.map(link => {
						return (
							<a
								className='navbar__link'
								key={link._id}
								onClick={() => history.push(link.path)}
							>
								{link.title}
							</a>
						)
					})
				}
			</div>

		</div>
	)
}

const mapStateToProps = state => {
	const { headerLinks } = state.headerNavbar;
	return {
		headerLinks
	}
}

export default connect(mapStateToProps)(Header);
