<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue';
</script>
<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join the club and get the benefits</h3>
            <span class="subscribe-descr"
                >Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more</span
            >
            <div class="subscribe-checks">
                <div class="subscribe-check">
                    <img
                        src="/svg/check.svg"
                        alt="check"
                        class="subscribe-check__icon"
                    />

                    <span class="subscribe-check__name">Exclusive offers</span>
                </div>

                <div class="subscribe-check">
                    <img
                        src="/svg/check.svg"
                        alt="check"
                        class="subscribe-check__icon"
                    />

                    <span class="subscribe-check__name">Free events</span>
                </div>

                <div class="subscribe-check">
                    <img
                        src="/svg/check.svg"
                        alt="check"
                        class="subscribe-check__icon"
                    />

                    <span class="subscribe-check__name">Large discounts</span>
                </div>
            </div>
            <SubscribeForm />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.subscribe {
    background-image: url('/img/subscribe.jpg');
    background-size: cover;
    padding: 97px 0 86px 0;
    @media (max-width: 767px) {
        background-image: url('/img/subscribe-mobile.jpg');
        padding: 15px;
        margin: 0 -24px;
    }
    &-content {
        max-width: 500px;
        margin: auto;
        color: #fff;
        text-align: center;
        @media (max-width: 767px) {
            text-align: left;
        }
    }

    &-checks {
        display: flex;
        justify-content: center;
        gap: 37px;
        margin: 36px 0 40px 0;
        @media (max-width: 767px) {
            display: block;
        }
    }

    &-check {
        display: flex;
        align-items: center;
        @media (max-width: 767px) {
            margin-bottom: 10px;
        }

        &__icon {
            margin-right: 9px;
        }
    }

    &-title {
        margin: 0 0 12px 0;
        font-weight: 400;
        font-size: 32px;
        font-family: var(--clash);
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }

    &-descr {
        font-size: 18px;
        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
}
</style>
