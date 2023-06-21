<script setup>
import Button from '@/components/UI/Button.vue';
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        default: 'View collection',
    },
    colorTitle: {
        type: String,
        default: '',
    },

    colorDescription: {
        type: String,
        default: '#5b5676',
    },

    colorLink: {
        type: String,
        required: false,
    },

    background: {
        type: String,
        default: '#fff',
    },

    mobilePadding: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <div
        class="hero-info"
        :style="{ backgroundColor: background }"
        :class="{ 'hero-info--mobile-padding': mobilePadding }"
    >
        <div class="hero-info-text">
            <h2 class="hero-info__title" :style="{ color: colorTitle }">
                {{ title }}
            </h2>
            <span
                class="hero-info__description"
                :style="{ color: colorDescription }"
                >{{ description }}</span
            >
        </div>
        <Button
            mobileFullWidth="true"
            type="link"
            to="/"
            :color="colorLink || 'secondary'"
        >
            View collection
        </Button>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 630px;
        padding: 50px 55px;
        background: #fff;
        min-height: 444px;

        @media (max-width: 767px) {
            padding: 47px 0 32px 0;
            min-height: 0;
            text-align: center;
        }

        &-text {
            @media (max-width: 767px) {
                margin-bottom: 32px;
            }
        }

        &__title {
            font-family: var(--clash);
            font-weight: 400;
            font-size: 32px;
            line-height: 1.5;
            margin: 0 0 20px 0;
            @media (max-width: 1024px) {
                font-size: 22px;
            }
        }

        &__description {
            font-family: 'Satoshi', sans-serif;
            font-size: 18px;
            color: var(--lightGray);
        }

        &--mobile-padding {
            padding: 36px 32px;
        }
    }
}
</style>
