<template>
    <div class="relative">
        <div id="block" class="flex flex-row
        place-content-center h-44 bg-cover bg-center
        md:h-56 rounded-xl shadow-lg m-2 relative
        hover:shadow-2xl transition-all duration-300
        hover:ml-10 
        " :style="{'backgroundImage': `url(${props.blogimg})`}"
        @click="emits('openBlog', props.blogid)"
        >
                <span class="absolute 
                left-2 bottom-2
                text-3xl text-white
                pr-2
                typing-animation
                ">{{props.blogtitle}}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
const emits = defineEmits(['openBlog'])
const props = defineProps({
    blogtitle: String,
    blogimg: String,
    blogid: String,
})

</script>

<style scoped>

</style>