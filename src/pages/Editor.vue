<template>
    <WrapRender :data="[page]"></WrapRender>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import WrapRender from '../components/WrapRender.vue';

const page = ref({
    type: 'simpletextrow',
    content: "awdawdawawdawdaw"
})



</script>

<style scoped>

</style>