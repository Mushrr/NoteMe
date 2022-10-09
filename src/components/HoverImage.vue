<template>
    <div class="flex flex-row 
    place-content-center h-44 bg-cover bg-center
    md:h-56 rounded-xl shadow-2xl m-2 relative"
     :style="{'background-image': `url(${props.blogimg})`, backgroundPosition: `${props.scroll.x}px ${props.scroll.y}px`} ">
    <span class="absolute 
     left-2 bottom-2
     text-3xl text-white
     pr-2
     typing-animation
     ">{{props.blogtitle}}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    blogimg: String,
    blogtitle: String,
    scroll: {
        type: Object,
        default() {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

</script>


<style scoped>



</style>