<script setup>
import HeroInformation from '@/components/HeroInformation.vue';
</script>

<template>
    <div class="hero">
        <div class="hero-info">
            <HeroInformation
                title="Luxury homeware for people who love timeless design quality"
                description="Shop the new Spring 2022 collection today"
                colorLink="lightgray"
            />
        </div>
        <img class="hero-info__img" src="/img/hero.jpg" alt="hero" />
    </div>
</template>

<style lang="scss" scoped>
.hero {
    background-image: url('/img/hero.jpg');
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
    height: 704px;
    background-size: cover;

    @media (max-width: 767px) {
        background-image: none;
    }

    &-info {
        &__img {
            max-width: 100%;
            margin-top: 32px;
            display: none;

            @media (max-width: 767px) {
                display: block;
            }
        }
    }

    @media (max-width: 767px) {
        height: auto;
        background: transparent;
        padding-right: 0;
        display: block;
    }
}
</style>
