import React from 'react';
import { connect } from 'react-redux';

const PurchaseDetailLabel = ({ className, title, value }) => {
	return (
		<div className={`${className} purchase-detail-label`}>
			<div className='purchase-detail-label__title'>{title}</div>
			<div className='purchase-detail-label__value'>{value}</div>
		</div>
	);
};

// total: 19.4,
//  creditCard: '-000',


const PurchaseDetail = props => {
    const { className, orderNumber, orderDate, total, creditCard, user } = props;
    const { name, shippingAddress } = user;

	return (
		<div className={`${className} purchase-detail`}>
			<PurchaseDetailLabel
				className='purchase-detail__order-number'
				title='Order Number'
				value={orderNumber}
			/>
			<PurchaseDetailLabel
				className='purchase-detail__order-date'
				title='Order Date'
				value={orderDate}
			/>
			<PurchaseDetailLabel
				className='purchase-detail__shipping-address'
				title='Shipping Address'
                value={`${name} ~\n ${shippingAddress}`}
			/>
			<PurchaseDetailLabel
				className='purchase-detail__total'
				title='Total'
                value={total}
			/>
			<PurchaseDetailLabel
				className='purchase-detail__credit-card'
				title='Cardit Card'
                value={creditCard}
			/>
            <a className='purchase-detail__track-shipment'>
                Track Shipment
            </a>
            <a className='purchase-detail__print-receipt'>
                Print Receipt
            </a>
		</div>
	);
};

const mapStateToProps = state => {
    const { purchaseDetail } = state.user 
    return {
        ...purchaseDetail
    }
}

export default connect(mapStateToProps)(PurchaseDetail);
