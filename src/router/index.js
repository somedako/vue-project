import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue';
import Product from '@/views/Product.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/products/:id',
            name: 'product',
            component: Product,
        },
    ],
});

export default router;
