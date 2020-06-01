import React from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';

const SignUpForm = props => {
    const { className, handleSubmit } = props;
    const links = [
        {
            _id: 0,
            title: 'Not Registered? Create account here',
            onClick: () => history.push('/signup')
        },
        {
            _id: 1,
            title: 'Forgot account email?',
            onClick: () => console.log('forgot email')
        },
        {
            _id: 2,
            title: 'forgot password?',
            onClick: () => console.log('forgot password')
        }
    ];

    return (
        <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
            <Field
                className='sign-up-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}
            />
            <Field
                className='sign-up-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}
            />
            <Field
                className='sign-up-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}
            />

            <Field
                className='sign-up-form__confirm-password'
                type='password'
                title='Confirm Password'
                placeholder='Confirm Password'
                name='confirm'
                component={FormInput}
            />





            <div className='sign-up-form__line' />
            <Field
                className='sign-up-form__login'
                type='submit'
                title='Login'
                name='login'
                component={FormButton}
            />

            <Field
                className='sign-up-form__back'
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}
            />
            <Details className='sign-up-form__details' title='QuickLinks' links={links} />
        </form>
    );
};

export default reduxForm({
    form: 'SignUpForm'
})(SignUpForm);
