import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';
import * as actions from '../../actions';

const SignUp = props => {
    useEffect(() => {
        props.setHeaderLinks([]);
        props.setNavbarLinks([]);

    }, []);

    const onSubmit = fields => {
        console.log(fields);
    };

    return (
        <div className='sign-up'>
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register' />
                <SignUpForm onSubmit={onSubmit} className='sign-up__form' />
            </div>
        </div>
    );
};

export default connect(null, actions)(SignUp);
