import React from 'react';

import PageTiitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail from './purchaseDetail';

const PurchaseHistory = props => {
	return (
		<div className='purchase-history'>
			<PageTiitle className='purchase-history__page-title' title='Purchase History' />
			<div className='purchase-history__content'>
				<Purchases className='purchase-history__purchases' />
				<PurchaseDetail className='purchase-history__detail' />
			</div>
			<div className='purchase-history__border-bottom' />
		</div>
	);
};

export default PurchaseHistory;
