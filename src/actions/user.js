import {SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS, ADD_CART_PRODUCTS} from './types';

export const setPurchaseDetail = (_id) => {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id
	};
};

export const addCartProduct = (product) => {
	return {
		type: ADD_CART_PRODUCTS,
		payload: product
	};
};

export const fetchCartProducts = () => {
	return {
		type: SET_CART_PRODUCTS,
		payload: [
			{
				_id: 0,
				product: {
					_id: 0,
					title: 'Javascript In the Browser',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
					price: 1.99,
					belongs: [ 0, 1 ],
					imageUrl: 'http://via.placeholder.com/80x80'
				},
				quantity: 2
			},
			{
				_id: 1,
				product: {
					_id: 1,
					title: 'Graph data base',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum sit illum rem vitae. Quasi, tenetur ipsum iusto dignissimos sequi numquam quibusdam debitis, doloremque adipisci hic, incidunt similique non corporis!',
					price: 1.99,
					belongs: [ 0, 6 ],
					imageUrl: 'http://via.placeholder.com/80x80'
				},
				quantity: 1
			}
		]
	};
};

export const fetchUserPurchases = () => {
	return {
		type: SET_USER_PURCHASES,
		payload: [
			{
				_id: 0,
				title: 'purchase 2',
				total: 25.0,
				orderNumber: 'A0021ANDJSJ6131',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Alex Dame',
					shippingAddress: '528 Rain st'
				}
			},
			{
				_id: 1,
				title: 'purchase 2',
				total: 10.0,
				orderNumber: 'A00216131',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Frank Tiller',
					shippingAddress: '1234 west state st'
				}
			},
			{
				_id: 2,
				title: 'purchase 2',
				total: 19.4,
				orderNumber: 'A0021DFHL31',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Rob Sincere',
					shippingAddress: '1234 west state st'
				}
			},
			{
				_id: 3,
				title: 'purchase 2',
				total: 19.4,
				orderNumber: 'A002168551',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Sam Flores',
					shippingAddress: '5568 Long Island'
				}
			},
			{
				_id: 4,
				title: 'purchase 2',
				total: 19.4,
				orderNumber: 'A00216131351',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Miller Song',
					shippingAddress: '1234 west state st'
				}
			},
			{
				_id: 5,
				title: 'purchase 2',
				total: 8.0,
				orderNumber: 'A00216131SJRUE',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Leslie 3rd',
					shippingAddress: '1234 west state st'
				}
			},
			{
				_id: 6,
				title: 'purchase 2',
				total: 11.55,
				orderNumber: 'A00216131323OP',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'Thinker John',
					shippingAddress: '1234 west state st'
				}
			},
			{
				_id: 7,
				title: 'purchase 3',
				total: 43.0,
				orderNumber: 'A0021613131D3',
				orderDate: new Date().toDateString(),
				creditCard: '-000',
				user: {
					name: 'John Miller',
					shippingAddress: '1234 west state st'
				}
			}
		]
	};
};
