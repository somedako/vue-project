<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

const menu = [
    {
        name: 'Plant pots',
        path: '/plant',
    },
    {
        name: 'Ceramics',
        path: '/ceramics',
    },
    {
        name: 'Tables',
        path: '/tables',
    },
    {
        name: 'Chairs',
        path: '/chairs',
    },
    {
        name: 'Crockery',
        path: '/crockery',
    },
    {
        name: 'Tableware',
        path: '/tableware',
    },
    {
        name: 'Cutlery',
        path: '/Cutlery',
    },
];

const openMenu = ref(false);
</script>

<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-left">
                <div class="header-top-search">
                    <img
                        src="/svg/header-search.svg"
                        alt="search"
                        class="header-top__icon"
                    />
                </div>
                <div
                    class="header-top-mobile-menu"
                    @click="openMenu = !openMenu"
                >
                    <img
                        src="/svg/menu.svg"
                        alt="menu"
                        class="header-top__icon"
                    />
                </div>
            </div>

            <router-link class="header-logo" to="#">Avion</router-link>
            <div class="header-top-right">
                <div class="header-top-right__cart">
                    <router-link to="/cart"
                        ><img src="/svg/header-cart.svg" alt="cart" />
                        <span
                            class="header-top-right__count"
                            v-if="cartStore.cart.length"
                            >{{ cartStore.cart.length }}</span
                        ></router-link
                    >
                </div>
                <div class="header-top-right__avatar">
                    <router-link to="/user">
                        <img src="/svg/header-avatar.svg" alt="avatar" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link
                class="header-menu__link"
                :to="element.path"
                v-for="(element, i) of menu"
                :key="i"
                >{{ element.name }}</router-link
            >
        </div>
        <div class="header-menu-mobile" v-if="openMenu">
            <router-link
                class="header-menu-mobile__link"
                :to="element.path"
                v-for="(element, i) of menu"
                :key="i"
                >{{ element.name }}</router-link
            >
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 132px;
    background: #fff;
    position: relative;
    @media (max-width: 767px) {
        height: auto;
    }

    &-top {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 70px;
        align-items: center;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
        margin: 0 28px;
        @media (max-width: 767px) {
            padding: 20px 0;
            margin: 0;
            border: none;
            height: auto;
            display: flex;
            justify-content: space-between;
        }

        &__icon {
            display: block;
        }

        &-left {
            display: flex;
            align-items: center;
            @media (max-width: 767px) {
                order: 2;
            }
        }

        &-mobile-menu {
            display: none;
            margin-left: 16px;
            @media (max-width: 767px) {
                display: block;
            }
        }

        &-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
            @media (max-width: 767px) {
                display: none;
            }
            &__cart {
                margin-right: 16px;
                position: relative;
            }

            &__count {
                position: absolute;
                left: -50%;
                bottom: 0;
                width: 15px;
                height: 15px;
                background: #000000;
                border-radius: 50%;
                color: #fff;
                font-size: 11px;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    &-logo {
        font-family: var(--clash);
        text-decoration: none;
        color: #22202e;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        @media (max-width: 767px) {
            order: 1;
        }

        &:hover {
            text-decoration: underline;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 44px;
        @media (max-width: 767px) {
            display: none;
        }

        &__link {
            text-decoration: none;
            color: var(--gray);
            &:hover {
                text-decoration: underline;
            }
        }

        &-mobile {
            position: absolute;
            background: #fff;
            top: 60px;
            border: 1px solid;
            padding: 40px 24px;
            width: 100%;
            padding: 10px;
            &-top {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 24px;
            }

            &__link {
                display: block;
                margin-bottom: 20px;
                text-decoration: none;
                color: var(--gray);
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
