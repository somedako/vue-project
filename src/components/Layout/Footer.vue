<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue';
</script>
<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Menu</span>
                        <router-link to="/" class="footer-menu__link"
                            >New arrivals</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Best sellers</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Recently viewed</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Popular this week</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >All products</router-link
                        >
                    </div>

                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Categories</span>
                        <router-link to="/" class="footer-menu__link"
                            >Crockery</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Furniture</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Homeware</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Plant pots</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Chairs</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Crockery</router-link
                        >
                    </div>

                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Our company</span>
                        <router-link to="/" class="footer-menu__link"
                            >About us</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Vacancies</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Contact us</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Privacy</router-link
                        >
                        <router-link to="/" class="footer-menu__link"
                            >Returns policy</router-link
                        >
                    </div>
                </div>
                <div class="footer-subscribe">
                    <span class="footer-menu__title"
                        >Join our mailing list</span
                    >
                    <SubscribeForm
                        colorButton="white"
                        bgInput="rgba(255, 255, 255, 0.15)"
                        colorText="#fff"
                    />
                </div>
            </div>

            <div class="footer-bottom">
                <span class="footer-bottom__copyright"
                    >Copyright 2023 Avion LTD</span
                >
                <div class="footer-bottom-socials">
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/linkedin.svg" alt="social"
                    /></a>
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/facebook.svg" alt="social"
                    /></a>
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/instagram.svg" alt="social"
                    /></a>
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/skype.svg" alt="social"
                    /></a>
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/twitter.svg" alt="social"
                    /></a>
                    <a href="" class="footer-bottom-socials__link"
                        ><img src="/svg/pinterest.svg" alt="social"
                    /></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: var(--darkPrimary);
    color: #fff;

    @media (max-width: 767px) {
        margin: 0 -24px;
    }

    &-content {
        padding: 58px 82px 25px 82px;
        @media (max-width: 1024px) {
            padding: 58px 30px 25px 30px;
        }
        @media (max-width: 767px) {
            padding: 58px 15px 25px 15px;
        }
    }

    &-top {
        display: grid;
        grid-template-columns: 540px 1fr;
        gap: 109px;
        border-bottom: 1px solid #4e4d93;
        @media (max-width: 1150px) {
            gap: 10px;
            grid-template-columns: 450px 1fr;
        }
        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
            padding-bottom: 35px;
        }
    }

    &-menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 25px;
        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        &__title {
            font-family: var(--clash);
            display: block;
            margin-bottom: 12px;
        }

        &__link {
            display: block;
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        @media (max-width: 767px) {
            display: block;
            text-align: center;
        }

        &__copyright {
            font-size: 14px;
        }

        &-socials {
            display: flex;
            align-items: center;
            @media (max-width: 767px) {
                margin-top: 15px;
                display: block;
            }

            &__link {
                margin: 0 12px;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>
