<script setup>
import { ref } from 'vue';
import Button from '@/components/UI/Button.vue';
import { useCartStore } from '@/stores/cart.js';

const props = defineProps({
    product: {
        type: Object,
        default: () => {},
        required: true,
    },
});

const productQty = ref(1);
const cartStore = useCartStore();

const changeQuantity = (type) => {
    if (type === 'minus') {
        productQty.value === 1 ? (productQty.value = 1) : productQty.value--;
    }

    if (type === 'plus') {
        productQty.value === 3 ? (productQty.value = 3) : productQty.value++;
    }
};
</script>

<template>
    <div class="product">
        <div>
            <img class="product-img" :src="product.img" :alt="product.name" />
        </div>
        <div>
            <h2 class="product-name">{{ product.name }}</h2>
            <span class="product-price">£{{ product.price }}</span>
            <div class="product-description">
                <span class="product-description__title"
                    >Product description</span
                >
                <div>
                    A timeless design, with premium materials features as one of
                    our most popular and iconic pieces. The dandy chair is
                    perfect for any stylish living space with beech legs and
                    lambskin leather upholstery.
                </div>
            </div>
            <div class="product-block">
                <span class="product-block__title">Dimenssions</span>
                <span class="product-block__param"
                    >Material: Particleboard, Papper foilback</span
                >
                <span class="product-block__param"
                    >panel: Fiberboard, Printed acrylic paint
                </span>
            </div>

            <div class="product-block">
                <span class="product-block__title">Quantity</span>
                <div class="product-quantity">
                    <span
                        class="product-quantity__symbol"
                        @click="changeQuantity('minus')"
                        >-</span
                    >
                    <span class="product-quantity__value">{{
                        productQty
                    }}</span>
                    <span
                        class="product-quantity__symbol"
                        @click="changeQuantity('plus')"
                        >+</span
                    >
                </div>
            </div>
            <Button
                @click="cartStore.addToCart(product, productQty)"
                color="primary"
                >Add To Cart</Button
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product {
    background: #f9f9f9;
    padding: 50px 80px;
    display: grid;

    grid-template-columns: 405px 500px;
    gap: 65px;
    &-name {
        margin: 0 0 40px 0;
        font-family: var(--clash);
        font-weight: 400;
        font-size: 36px;
    }
    &-price {
        display: block;
        font-size: 24px;
        margin-bottom: 28px;
    }

    &-description {
        border-top: 1px solid gray;
        margin-bottom: 14px;
        &__title {
            display: block;
            margin: 14px 0 14px 0;
        }
    }

    &-block {
        &__title {
            margin-bottom: 14px;
            display: block;
        }
        &__param {
            display: block;
        }
    }

    &-quantity {
        background: #fff;
        width: 122px;
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        margin-bottom: 20px;
        &__symbol {
            color: #b6b5bb;
            cursor: pointer;
        }
    }
}
</style>
