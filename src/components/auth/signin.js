import React from 'react';
import { reduxForm, Field } from 'redux-form';

const SignIn = () => {
    return (
        <div className='sign-in'>
            SignIn
        </div>
    );
}

reduxForm({
    form: 'SignIn'
})(SignIn)

export default SignIn;
