<script setup>
import Button from '@/components/UI/Button.vue';

const props = defineProps({
    bgInput: {
        type: String,
        required: false,
    },

    colorButton: {
        type: String,
        required: false,
    },

    colorText: {
        type: String,
        required: false,
    },
});
</script>
<template>
    <form class="subscribe-form">
        <input
            :style="{ backgroundColor: bgInput, color: colorText }"
            type="text"
            placeholder="your@email.com"
            class="input-text subscribe-form__input"
        />
        <Button :color="colorButton || 'primary'">Sign Up</Button>
    </form>
</template>

<style lang="scss" scoped>
.subscribe-form {
    display: flex;
    &__input {
        flex-grow: 1;
    }
}
</style>
