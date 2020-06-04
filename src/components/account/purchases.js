import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const Purchases = props => {
	const { className, purchases } = props;

	useEffect(() => {
		props.fetchUserPurchases();
	}, []);

	return (
		<div className={`${className} purchases`}>
			{purchases.map(purchase => {
				return <div key={purchase._id}>{purchase.title}</div>;
			})}
		</div>
	);
};

const mapStateToProps = state => {
	const { purchases } = state.user;

	return { purchases };
};

export default connect(mapStateToProps, actions)(Purchases);
