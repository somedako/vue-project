<script setup>
import HeroInformation from '@/components/HeroInformation.vue';
</script>

<template>
    <div class="ideas">
        <HeroInformation
            title="It started with a small idea"
            description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
            background="var(--darkPrimary)"
            colorTitle="#fff"
            colorDescription="#fff"
            mobilePadding="true"
        />
        <img class="ideas-img" src="/img/room.jpg" alt="room" />
    </div>
</template>

<style lang="scss" scoped>
.ideas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 80px;
    margin-bottom: 60px;
    gap: 16px;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 0;
    }

    &-img {
        height: 100%;
        object-fit: cover;
    }
}
</style>
