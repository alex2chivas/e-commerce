import React from 'react';

const GreenPriceTag = (props) => {
	const { className, title } = props;
	return <div className={`${className} green-price-tag`}>${title}</div>;
};

export default GreenPriceTag;
