import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
	return (
		<div className='header'>
			<img src='http://via.placeholder.com/50x50' />
			<div className='header__links'>
				{
					props.headerLinks.map((link, index) => {
						return (
							<a
								className='navbar__link'
								key={index}
								onClick={() => console.log('trying to switch tab')}
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
