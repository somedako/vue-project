<script setup>
const props = defineProps({
    background: {
        type: String,
        required: false,
    },

    type: {
        type: String,
        default: 'button',
    },

    to: {
        type: String,
        required: false,
    },

    color: {
        type: String,
        default: 'primary',
    },

    mobileFullWidth: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <button
        v-if="type === 'button'"
        :class="[
            'btn',
            {
                'btn--primary': color === 'primary',
                'btn--secondary': color === 'secondary',
                'btn--lightgray': color === 'lightgray',
                'btn--fullWidth': mobileFullWidth,
            },
        ]"
    >
        <slot />
    </button>

    <router-link
        v-else
        :to="to"
        :class="[
            'btn',
            {
                'btn--primary': color === 'primary',
                'btn--secondary': color === 'secondary',
                'btn--lightgray': color === 'lightgray',
                'btn--fullWidth': mobileFullWidth,
            },
        ]"
        ><slot
    /></router-link>
</template>

<style lang="scss" scoped>
.btn {
    padding: 0 32px;
    font-size: 16px;
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    @media (max-width: 767px) {
        padding: 0 10px;
    }
    &:hover {
        opacity: 0.8;
    }

    &--primary {
        background: var(--darkPrimary);
        color: #fff;
    }

    &--secondary {
        background: rgba(249, 249, 249, 0.15);
        color: #fff;
    }

    &--lightgray {
        background: #f9f9f9;
        color: var(--darkPrimary);
    }

    &--white {
        background: #fff;
        color: var(--darkPrimary);
    }

    &--fullWidth {
        @media (max-width: 767px) {
            width: 100%;
        }
    }
}
</style>
