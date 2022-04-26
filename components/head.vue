<template>
    <div class="flex justify-center bg-black-bg-color">
        <div class="flex container h-[3.5rem] leading-[3.5rem] text-white px-5">
            <nuxt-link to="/" class="site-title">CarleBlog.com</nuxt-link>
            <span class="head-title-container">
                <nuxt-link to="/" class="head-title">博客首页</nuxt-link>
            </span>
            <span class="head-title-container">
                <nuxt-link to="/archive" class="head-title">归档文章</nuxt-link>
            </span>
            <span class="head-title-container">
                <nuxt-link to="/skillSample" class="head-title">技能展示</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.head-title-container {
    @apply w-28 text-center leading-[3.5rem] h-[3.5rem];
}
.head-title {
    @apply leading-8 h-8 hover:bg-white hover:text-black-bg-color  rounded px-2;
    display: inline-block;
}

.site-title {
    @apply w-28 leading-[3.5rem] h-[3.5rem];
}
</style>