<template>
    <div id="page">
        <template v-if="route.params.blogid">
            <Render :data="(data as Blog)"></Render>
        </template>
    </div>
</template>
<!-- 

主渲染入口

基础组件：
1. 标题
2. 标题图片
3. 标题下的icon
4. header
5. 文本内容
6. 代码块
7. mermaid
8. 子组件内容

 -->

<script lang="ts" setup>
import {useRoute} from 'vue-router';
import Render from '../components/Render.vue';
import {onMounted, ref} from 'vue';
import {gsap} from 'gsap';
import { Blog } from '../types';

const route = useRoute();
const data = ref({});



onMounted(async () => {
    const blogInfo = await import(`../blogs/${route.params.blogid[0]}.json`);
    console.log(blogInfo);
    data.value = blogInfo;

    gsap.from('#page', {
        y: 1000,
        ease: "power-4",
        duration: 0.5
    })
})
</script>

<style scoped>

</style>