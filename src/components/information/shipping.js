import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import * as actions from '../../actions';

import ShippingForm from './shippingForm';

const Shipping = props => {
    useEffect(() => {
        props.setNavbarLinks([]);
        props.setHeaderLinks([]);
    }, []);

    const onSubmit = fields => {
        console.log(fields);
    };

    return (
        <div className='shipping-form'>
            <div className='shipping-form'>
                <PageTitle className='shipping-form__page-title' title='Shipping Address' />
                <ShippingForm onSubmit={onSubmit} className='shipping-form__form' />
            </div>
        </div>
    );
};

export default connect(null, actions)(Shipping);
