<script setup>
import { onMounted, ref } from 'vue';
import api from '@/api';

import Loader from '@/components/UI/Loader.vue';
import Hero from '@/components/Hero.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import Products from '@/components/Products4Column.vue';
import Ideas from '@/components/Ideas.vue';
import Subscribe from '@/components/Subscribe.vue';

const products = ref([]);
const loading = ref(true);
onMounted(async () => {
    products.value = await api.getProducts();
    loading.value = false;
});
</script>

<template>
    <div>
        <Hero />
        <AboutBrand />
        <Loader v-if="loading" />
        <Products products="products" />
        <Ideas />
        <Subscribe />
    </div>
</template>
