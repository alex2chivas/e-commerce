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
				return (
					<a
						onClick={() => props.setPurchaseDetail(purchase._id)}
						key={purchase._id}
						className='purchases__purchase purchase'
					>
						<img className='purchase__img' src='http://via.placeholder.com/80x80' />
					</a>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	const { purchases } = state.user;

	return { purchases };
};

export default connect(mapStateToProps, actions)(Purchases);
