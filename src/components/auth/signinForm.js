import React from 'react';
import { reduxForm, Field } from 'redux-form';

const SignInForm = props => {
    const { className } = props;

    return (
        <form className={`${className} sign-in-form`}>
            SignIn Form
        </form>
    );
}

reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm;
