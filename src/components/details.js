import React from 'react';

const Details = React.memo(props => {
	const { title, links, onClick } = props;
	return (
		<div>
			<div className='details__title'>{title}</div>
			<div className='detail__link'>
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
