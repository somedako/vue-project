<script setup>
import { ref } from 'vue';

const aboutBrands = [
    {
        id: 1,
        img: '/svg/about-brand-1.svg',
        title: 'Next day as standard',
        descr: 'Order before 3pm and get your order the next day as standard',
    },
    {
        id: 2,
        img: '/svg/about-brand-2.svg',
        title: 'Made by true artisans',
        descr: 'Handmade crafted goods made with real passion and craftmanship',
    },
    {
        id: 3,
        img: '/svg/about-brand-3.svg',
        title: 'Unbeatable prices',
        descr: 'For our materials and quality you won’t find better prices anywhere',
    },
    {
        id: 4,
        img: '/svg/about-brand-4.svg',
        title: 'Recycled packaging',
        descr: 'We use 100% recycled to ensure our footprint is more manageable',
    },
];
</script>

<template>
    <div class="about-brand">
        <h3 class="about-brand__title">What makes our brand different</h3>
        <div class="about-brand-elements">
            <div
                v-for="element of aboutBrands"
                :key="element.id"
                class="about-brand-element"
            >
                <img
                    class="about-brand-element__img"
                    :src="element.img"
                    :alt="element.title"
                />
                <h4 class="about-brand-element__title">{{ element.title }}</h4>
                <span class="about-brand-element__descr">{{
                    element.descr
                }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-brand {
    padding: 80px 80px 130px 80px;
    @media (max-width: 767px) {
        padding: 48px 0;
    }

    &__title {
        text-align: center;
        font-size: 24px;
        margin: 0 0 84px 0;
        @media (max-width: 767px) {
            text-align: left;
            font-size: 20px;
            margin-bottom: 36px;
        }
    }

    &-elements {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-between;
        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        @media (max-width: 767px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &-element {
        color: var(--darkPrimary);
        background: #f9f9f9;
        padding: 48px;
        @media (max-width: 767px) {
            padding: 36px 24px;
        }

        &__img {
            display: block;
            margin-bottom: 12px;
        }

        &__title {
            margin: 0 0 12px 0;
            font-size: 20px;
        }
    }
}
</style>
