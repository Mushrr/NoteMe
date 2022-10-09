<template>
    <div id="page">
        <Render :data="data"></Render>
    </div>
</template>


<script lang="ts" setup>
import Render from '../components/Render.vue';
import { baseURL } from '../config';
import aboutme from '../blogs/aboutme.json';
import { onBeforeMount, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const data = aboutme

onMounted(() => {
    gsap.from('#page', {
        y: 1000,
        ease: "power-4",
        duration: 0.5
    })
})
</script>


<style>

</style>