<template>
    <div>
        <div class="flex place-content-center items-center" style="height: 90vh">
            <span class="text-2xl font-mono  typing-animation border-red-400">
                More than mechanary, <br />we need more humanity.
            </span>
        </div>
        <div class="col-start-1 col-end-3 text-2xl text-center underline border-l-4 border-r-4 border-blue-500">
                blogs
            </div>
        <div 
        id="content"
        class="mt-10 grid md:grid-cols-2 grid-cols-1">
            
            <div v-for="blog, index in blogs" ref="blogrefs">
                <BlogBlock 
                    :blogimg="blog.blogimg" 
                    :blogtitle="blog.blogtitle" 
                    :blogid="blog.blogid"
                    @open-blog="jumpTo"
                ></BlogBlock>
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

const { x, y } = useScroll();
const load = ref(false);
const blogrefs = ref([]);
const blogs = ref(
    [
        {
            blogtitle: "About me",
            blogimg: '/assets/images/nanami.jpg',
            blogid: "aboutme",
        },
        {
            blogtitle: "Clannad",
            blogimg: '/assets/images/clannadfamily.jpg',
            blogid: "clannad",
        },
        {
            blogtitle: "青山七海",
            blogimg: '/assets/images/nanami2.jpg',
            blogid: "nanami",
        }
    ]
)

watch(y, (val, oldVal) => {
    if (val > 100 && !load.value) {
        for (let blogblock of blogrefs.value) {
            console.log('开始动画')
            gsap.from(blogblock, {
                opacity: 0,
                x: -100,
                ease: "power-1",
                duration: Math.random() + 0.8,
            })
        }
        console.log(blogrefs.value);
        load.value = true;
    }
})

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