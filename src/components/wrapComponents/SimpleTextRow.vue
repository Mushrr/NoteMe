<template>
    <p class="border-b-2 pl-4 pr-4" :contenteditable="props.contenteditable">{{props.content}}</p>
</template>

<script lang='ts' setup>
const props = defineProps({
    content: String,
    contenteditable: Boolean
})

</script>

<style scoped>

</style>