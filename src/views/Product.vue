<script setup>
import { useRoute } from 'vue-router';

import { products } from '@/api.js';

import ProductDetail from '@/components/ProductTemplate.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import Subscribe from '@/components/Subscribe.vue';

const route = useRoute();
const product = products.find(
    (product) => product.id.toString() === route.params.id
);
</script>
<template>
    <ProductDetail :product="product" v-if="product" />
    <AboutBrand />
    <Subscribe />
</template>

<style lang="scss" scoped></style>
