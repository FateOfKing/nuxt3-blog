<template>
    <div class="bg-gray-page-bg-color h-screen">
        <slot name="header"></slot>
        <div class="container h-full mx-auto main clear-fix">
            <div class="center">
                <slot></slot>
            </div>

            <div class="maxmd:hidden left">
                <slot name="leftPart"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.center {
    width: 100%; /* 这会把left和right挤到下一行 */
    height: 100vh;
    overflow-y: auto;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
/* 清除浮动 */
.clear-fix::after {
    content: "";
    display: block;
    clear: both;
}
.left,
.center {
    float: left;
}
.left {
    width: 13rem;
    margin-left: -100%; /* 把left移动到和center同一行并且左边对齐 */
    position: relative;
    left: -14rem; /* 再向左移动到main的padding区域,就不会挡住center了 */
}
.main {
    padding: 0 14rem; /* 左右两边的padding来放置left和right区域 */
}
</style>