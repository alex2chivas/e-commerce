import React from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';

const SignUp = () => {
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

export default SignUp;
