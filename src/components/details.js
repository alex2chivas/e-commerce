import React from 'react';

const Details = React.memo(props => {
	const { className, title, links } = props;
	return (
		<div className={`${className} details`}>
			<div className='details__title'>{title}</div>
			<div className='details__links'>
				{links.map((link, index) => {
					return (
						<a key={link._id} onClick={link.onClick} className='details__link'>
							{link.title}
						</a>
					);
				})}
			</div>
		</div>
	);
});

export default Details;
