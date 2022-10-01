<template>
    <div class="flex flex-row 
    place-content-center h-44 bg-cover bg-center
    md:h-56 rounded-xl shadow-2xl m-2 relative
    " :style="{'backgroundImage': `url(${props.blogimg})`}">
    <span class="absolute 
     left-2 bottom-2
     text-3xl text-red-400
     pr-2
     typeing-animation
     ">{{props.blogtitle}}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    blogimg: String,
    blogtitle: String
})

</script>


<style scoped>

.typeing-animation {
    animation: typing 1000ms infinite;
}

@keyframes typing {
    0%, 100% {
        border-right: 2px solid whitesmoke;
    }
    50% {
        border-right: 2px solid rgba(0, 0, 0, 0);
    }
}

</style>