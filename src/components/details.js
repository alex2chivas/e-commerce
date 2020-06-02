import React from 'react';

const Details = React.memo(props => {
	const renderChildren = () => {
		const { links, info } = props;
		let children = [];

		if (links) {
			children = links.map(link => {
				return (
					<a key={link._id} onClick={link.onClick} className='details__link'>
						{link.title}
					</a>
				);
			});
		} else if (info) {
			children = info.map(item => {
				return (
					<a key={item._id} className='details__item' >
						{item.title}
					</a>
				);
			});
		}

		return children;
	};

	const { className, title } = props;

	return (
		<div className={`${className} details`}>
			<div className='details__title'>{title}</div>
			<div className='details__links'>{renderChildren()}</div>
		</div>
	);
});

export default Details;
