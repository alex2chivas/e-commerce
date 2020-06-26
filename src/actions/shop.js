import {
	SET_SHOP_CATEGORIES,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
	FILTER_PRODUCTS_WITH_CATEGORY_ID,
	FILTER_PRODUCTS_WITH_QUERY
} from './types';

export const filterProductsWithQuery = (fields) => {
	return {
		type: FILTER_PRODUCTS_WITH_QUERY,
		payload: fields
	};
};

export const filterProductsWithCategoryId = (_id) => {
	return {
		type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
		payload: _id
	};
};

export const fetchShopCategories = () => {
	return {
		type: SET_SHOP_CATEGORIES,
		payload: [
			{
				_id: 0,
				title: 'All',
				active: true
			},
			{
				_id: 1,
				title: 'Javascript',
				active: false
			},
			{
				_id: 2,
				title: 'UI/UX',
				active: false
			},
			{
				_id: 3,
				title: 'Linux',
				active: false
			},
			{
				_id: 4,
				title: 'Python',
				active: false
			},
			{
				_id: 5,
				title: 'UML',
				active: false
			},
			{
				_id: 6,
				title: 'Ruby',
				active: false
			}
		]
	};
};

export const fetchShopProducts = () => {
	return {
		type: SET_SHOP_PRODUCTS,
		payload: [
			{
				_id: 0,
				title: 'Javascript In the Browser',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 1 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 1,
				title: 'Graph data base',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 6 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 2,
				title: 'Full stack development',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 1, 4 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 3,
				title: 'User Interface Design',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 2 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 4,
				title: 'Javascript Development',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 1 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 5,
				title: 'User Experience Design',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 2 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			},
			{
				_id: 6,
				title: 'Advanced OOP',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
				price: 1.99,
				belongs: [ 0, 6 ],
				imageUrl: 'http://via.placeholder.com/80x80'
			}
		]
	};
};
