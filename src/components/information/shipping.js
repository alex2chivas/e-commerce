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
        <div className='shipping'>
            <PageTitle className='shipping__page-title' title='Shipping Address' />
            <ShippingForm onSubmit={onSubmit} className='shipping__form' />
        </div>    
        );
};

export default connect(null, actions)(Shipping);
