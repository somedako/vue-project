<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="product">
        <router-link :to="`/products/${id}`">
            <img class="product-image" :src="img" :alt="name" />
        </router-link>
        <router-link :to="`/products/${id}`" class="product-name">{{
            name
        }}</router-link>
        <span class="product-price">£{{ price }}</span>
    </div>
</template>

<style lang="scss" scoped>
.product {
    &-image {
        display: block;
        margin-bottom: 24px;
    }

    &-name {
        display: block;
        color: var(--darkPrimary);
        font-size: 20px;
        line-height: 1.4;
        text-decoration: none;
        font-family: var(--clash);
        margin-bottom: 8px;

        @media (max-width: 767px) {
            font-size: 16px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
    &-price {
        display: block;
        font-size: 18px;
        color: var(--darkPrimary);

        @media (max-width: 767px) {
            font-size: 15px;
        }
    }
}
</style>
