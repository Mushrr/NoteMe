<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
        <path :fill="color" d="M8 19V5l11 7Zm2-7Zm0 3.35L15.25 12 10 8.65Z" />
    </svg>
</template>

<script lang='ts' setup>
import useTheme from '../state/useTheme';
import {ref, watch, onMounted} from 'vue';
import { storeToRefs } from 'pinia';

const { theme } = storeToRefs(useTheme());

const color = ref(null);


const props = defineProps(['height', 'width', 'color'])

watch(theme, (val, oldVal) => {
    if (val === 'dark') {
        color.value = props.color.dark;
    } else {
        color.value = props.color.light;
    }
})

onMounted(() => {
    if (theme.value === 'dark') {
        color.value = props.color.dark;
    } else {
        color.value = props.color.light;
    }
})
</script>

<style scoped>

</style>