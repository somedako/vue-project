import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', () => {
    const cart = ref([]);
    const addToCart = (product, count) => {
        const cartIndex = cart.value.findIndex((el) => el.id === product.id);
        if (cartIndex === -1) {
            cart.value.push({ ...product, count });
        }
    };
    return { cart, addToCart };
});
