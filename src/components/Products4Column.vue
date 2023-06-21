<script setup>
import { ref } from 'vue';
import Product from '@/components/Product.vue';
import Button from '@/components/UI/Button.vue';

const products = ref([
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
]);
</script>

<template>
    <div class="products-container">
        <div class="products">
            <Product
                v-for="product of products"
                :img="product.img"
                :name="product.name"
                :price="product.price"
                :id="product.id"
                :key="product.id"
            />
        </div>
        <div class="products-link">
            <Button mobileFullWidth="true" color="lightgray" type="link" to="/"
                >View collection</Button
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 80px;
    gap: 20px;
    margin-bottom: 64px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        padding: 0;
    }

    &-container {
        margin-bottom: 56px;
    }

    &-link {
        display: block;
        text-align: center;
        font-size: 16px;
        color: var(--darkPrimary);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
