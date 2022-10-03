<template>
    <HoverImage :blogimg="props.data.blogimg" :blogtitle="props.data.title"></HoverImage>
    <WrapRender :data="props.data.content" :contenteditable="props.data.contenteditable"></WrapRender>
    <!-- {{props.data}} -->
</template>


<script lang="ts" setup>
import HoverImage from './HoverImage.vue';
import WrapRender from './WrapRender.vue';
interface Blog {
    blogid: string,
    title: string,
    blogimg: string,
    content: Array<{
        type: string,
        [propnames: string]: any
    }>,
    contenteditable: Boolean
}

const props = defineProps<{
    data: Blog
}>()
</script>


<style scoped>

</style>