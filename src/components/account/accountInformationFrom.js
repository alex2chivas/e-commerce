import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton } from '../formFields';

const AccountInformationForm = props => {
    const { className, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
            <Field
                className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}
            />
            <Field
                className='sign-in-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}
            />
            <div className='sign-in-form__line' />
            <Field
                onClick={() => history.push('/account')}
                className='sign-in-form__login'
                type='submit'
                title='Login'
                name='login'
                component={FormButton}
            />
        </form>
    );
};

export default reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);
