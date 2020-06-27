import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import * as actions from '../../actions';

const Shipping = props => {
    useEffect(() => {
        props.setNavbarLinks([]);
        props.setHeaderLinks([]);
    }, []);

    const onSubmit = fields => {
        console.log(fields);
    };

    return (
        <div className='sign-in'>
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Shipping Address' />
                {/* <ShippingForm onSubmit={onSubmit} className='sign-in__form' /> */}
            </div>
        </div>
    );
};

export default connect(null, actions)(Shipping);
