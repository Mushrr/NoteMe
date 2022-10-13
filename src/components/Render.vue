<template>
    <HoverImage :blogimg="props.data.blogimg" :blogtitle="props.data.title" :scroll="props.data.scroll" :blogtitlecolor="props.data.blogtitlecolor"></HoverImage>
    <WrapRender :data="(props.data.content as Array<Sec>)" :contenteditable="props.data.contenteditable"></WrapRender>
    <!-- {{props.data}} -->
</template>


<script lang="ts" setup>
import HoverImage from './HoverImage.vue';
import WrapRender from './WrapRender.vue';
import { Blog, Sec } from '../types';

const props = defineProps<{
    data: Blog
}>()
</script>


<style scoped>

</style>