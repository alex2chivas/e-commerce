import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

const navbarLinks = [
	{
		_id: 0,
		title: 'Purchase History',
		active: true,
		component: <PurchaseHistory />
	},
	{
		_id: 1,
		title: 'Account information',
		active: false,
		component: <AccountInformation />
	}
];

const headerLinks = [
    {
        _id: 0,
        title: 'Shop',
        path: '/shop'
    },
    {
        _id: 1,
        title: 'Logout',
        path: '/'
    }
]

const Account = props => {
	useEffect(() => {
        props.setHeaderLinks(headerLinks);
		props.setNavbarLinks(navbarLinks);
	}, []);

	const renderContent = () => {
		let jsx;
		if (props.navbarLinks) {
			props.navbarLinks.map(link => {
				if (link.active) {
					jsx = link.component;
				}
			});
		}
		return jsx;
	};

	return <div className='account'>{renderContent()}</div>;
};

const mapStateToProps = state => {
	const { headerLinks, navbarLinks } = state.headerNavbar;
	return { headerLinks, navbarLinks };
};

export default connect(mapStateToProps, actions)(Account);
