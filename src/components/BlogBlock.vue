<template>
    <div class="relative">
        <div ref="blogblock" id="block" class="flex flex-row
        place-content-center h-44 bg-cover bg-center
        md:h-56 rounded-xl shadow-lg m-2 relative
        hover:shadow-2xl transition-all duration-300
        hover:ml-10 
        " :style="{'backgroundImage': `url(${imageSrc})`}"
        @click="emits('openBlog', props.blogid)"
        >
                <span class="absolute 
                left-2 bottom-2
                text-3xl text-white
                dark:text-gray-200
                pr-2
                typing-animation
                ">{{props.blogtitle}}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { Ref, ref } from "vue";
import { imageLazyLoad } from "../utils";
import { defaultImageSrc } from "../config";

const emits = defineEmits(['openBlog'])
const imageSrc = ref(defaultImageSrc);
const blogblock: Ref<HTMLDivElement | null> = ref(null);
const props = defineProps({
    blogtitle: String,
    blogimg: {
        type: String,
        required: true
    },
    blogid: String,
})



// const image = new Image();
// image.src = props.blogimg!;

// image.addEventListener("load", (e) => {
//     blogblock.value?.style.setProperty("background", `center url("${image.src}")`);
//     blogblock.value?.style.setProperty("background-size", `cover`);
// })

imageLazyLoad(props.blogimg!, imageSrc);

</script>

<style scoped>

</style>