import React from 'react';

import SignInForm from './signinForm';

const SignIn = () => {
    const onSubmit = fields => {
        console.log(fields)
    }

    return (
        <div className='sign-in'>
            < SignInForm onSubmit={onSubmit} className='sign-in__form'/>
        </div>
    );
}

export default SignIn;
