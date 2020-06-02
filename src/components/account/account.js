import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

const navbarLinks = [
    {
        _id: 0,
        title: 'Purchase History',
        active: false,
        component: <PurchaseHistory />

    },
    {
        _id: 1,
        title: 'Account information',
        active: true,
        component: <AccountInformation />
    },

]

const Account = props => {
    useEffect(() => {
        props.setHeaderLinks([])        
        props.setNavbarLinks(navbarLinks)        
    }, []);

	const renderContent = () => {
        let jsx;
		if(props.navbarLinks) {
            props.navbarLinks.map(link => {
                if(link.active) {
                    jsx = link.component
                }
            })
        }
        return jsx;
	};

	return <div>{renderContent()}</div>;
};

const mapStateToProps = state => {
    const { headerLinks, navbarLinks } = state.headerNavbar
    return { headerLinks, navbarLinks }
}

export default connect(mapStateToProps, actions)(Account);
