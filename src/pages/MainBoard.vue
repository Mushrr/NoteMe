<template>
    <div>
        <div class=" flex place-content-center items-center" style="height: 90vh">
            <span class="text-2xl font-mono  typing-animation border-red-400" v-html="mainBoardDialog">
            </span>
            <!-- 插入标题页面文字 -->

        </div>
        <div class="col-start-1 col-end-3 text-2xl text-center underline border-l-4 border-r-4 border-blue-500">
            blogs
        </div>
        <div id="content" class="mt-10 grid md:grid-cols-2 grid-cols-1">

            <div v-for="blog, index in blogs" ref="blogrefs">
                <BlogBlock :blogimg="blog.blogimg" :blogtitle="blog.blogtitle" :blogid="blog.blogid"
                    @open-blog="jumpTo"></BlogBlock>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
// @ts-ignore
import { gsap } from 'gsap';
import { onMounted, ref, watch } from 'vue';
import useScroll from '../use/useScroll';
import BlogBlock from '../components/BlogBlock.vue';
import router from '../router';
import allPages from '../blogs/blogs.json'
import { mainBoardDialog } from '../config';

const { x, y } = useScroll();
const load = ref(false);
const blogrefs = ref([]);
const blogs = ref(
    allPages
)

// const watchScrollY = watch(y, (val, oldVal) => {
//     if (window.innerWidth > 550) {
//         if (val > 100 && !load.value) {
//             for (let blogblock of blogrefs.value) {
//                 console.log('开始动画')
//                 gsap.from(blogblock, {
//                     opacity: 0,
//                     x: -100,
//                     ease: "power-1",
//                     duration: Math.random() + 0.8,
//                 })
//             }
//             console.log(blogrefs.value);
//             load.value = true;
//             watchScrollY(); // 停止监听
//         }
//     }
// })

function jumpTo(blogid: string) {
    console.log(blogid);
    router.push({
        path: `/blog/${blogid}`,
        params: {
            blogid: blogid,
        }
    })
}
</script>

<style scoped>

</style>