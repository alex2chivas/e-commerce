import React from 'react';

import PageTiitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail from './purchaseDetail';

const PurchaseHistory = props => {
    return (
        <div className='purchase-history'>
            <PageTiitle className='purchase-history__page-title' title='Purchase History'></PageTiitle>
            <Purchases className='purchase-history__purchases'/>
            <PurchaseDetail className='purchase-history__detail'/>
            <div className='purchase-history__border-bottom' />
        </div>
    );
}

export default PurchaseHistory;