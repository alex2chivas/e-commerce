import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

import * as actions from '../../actions';

const Review = (props) => {
	useEffect(() => {
		props.setHeaderLinks([]);
		props.setNavbarLinks([]);
	}, []);

	const onSubmit = (fields) => {
		console.log(fields);
	};

	return (
		<div className='review'>
			<PageTitle className='review__page-title' title='Order Review' />
			<ReviewForm className='review__form' onSubmit={onSubmit} />
		</div>
	);
};

export default connect(null, actions)(Review);
