import axios from 'axios';
import config from '@/config.js';

export const HTTP = axios.create({
    baseURL: config.MOCK,
});

export default {
    async getProducts() {
        try {
            const response = await HTTP.get('/products');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};

export const products = [
    {
        id: 1,
        img: '/img/product-1.jpg',
        name: 'The Dandy chair',
        price: '250',
    },
    {
        id: 2,
        img: '/img/product-2.jpg',
        name: 'Rustic Vase Set',
        price: '155',
    },
    {
        id: 3,
        img: '/img/product-3.jpg',
        name: 'The Silky Vase',
        price: '125',
    },
    {
        id: 4,
        img: '/img/product-4.jpg',
        name: 'The Lucy Lamp',
        price: '399',
    },
];
