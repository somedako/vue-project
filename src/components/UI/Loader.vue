<template>
    <div class="loader-container"><div class="loader"></div></div>
</template>
<style lang="scss" scoped>
.loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
    &-container {
        display: flex;
        justify-content: center;
    }
}

.loader::before,
.loader::after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
}

.loader::before {
    animation: ball1 1s infinite;
}

.loader::after {
    animation: ball2 1s infinite;
}

@keyframes ball1 {
    0% {
        box-shadow: 30px 0 0 #f8b334;
    }

    50% {
        box-shadow: 0 0 0 #f8b334;
        margin-bottom: 0;
        transform: translate(15px, 15px);
    }

    100% {
        box-shadow: 30px 0 0 #f8b334;
        margin-bottom: 10px;
    }
}

@keyframes ball2 {
    0% {
        box-shadow: 30px 0 0 #97bf0d;
    }

    50% {
        box-shadow: 0 0 0 #97bf0d;
        margin-top: -20px;
        transform: translate(15px, 15px);
    }
    100% {
        box-shadow: 30px 0 0 #97bf0d;
        margin-top: 0;
    }
}
</style>
