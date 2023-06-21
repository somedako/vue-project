<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';
</script>

<template>
    <div class="container">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
@import './assets/styles/common.scss';
</style>
