<template>
    <template v-if="!route.params.blogid">
        <Render :data="data"></Render>
    </template>
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
import { useRoute } from 'vue-router';
import Render from '../components/Render.vue';
import { baseURL } from '../config';

const route = useRoute();

const data = {
    blogid: "TEST",
    title: "About me",
    blogimg: `${baseURL}/image/618b5co98ldpq1otf00blr19cubtre15.jpeg`,
    content: [
        {
            type: 'h',
            level: 2,
            content: "Self-Introducation",
            children: [
                {
                    type: "h",
                    level: 3,
                    content: "About Work",
                    children: [
                        {
                            type: "simpletextrow",
                            content: "I am in 3rd year of university, Learn So many different course like \
                            computer network、operating system etc. In my spire time, Learning some front knowledges \
                            is what I will do. ✨"
                        }
                    ]
                },
                {
                    type: "h",
                    level: 3,
                    content: "About Life",
                    children: [
                        {
                            type: "simpletextrow",
                            content: "Most of my spire time, watch some animted film or enjoying some music."
                        },

                    ]
                },
                {
                    type: "imagegallery",
                    href: `${baseURL}/image/qrvikkh7lt1utal0ajs2nugdmcvhqv97.jpeg`
                },
                {
                    type: "simpletext",
                    icon: '🌵',
                    sectitle: 'Contact Me',
                    content: [
                        {
                            type: 'h',
                            level: 3,
                            content: "You can contact me with"
                        },
                        {
                            type: 'h',
                            level: 3,
                            content: 'mushroom@mails.ccnu.edu.cn'
                        }
                    ],
                },
            ]
        }
    ]
}

</script>

<style scoped>

</style>