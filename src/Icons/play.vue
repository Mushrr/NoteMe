<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
        <path :fill="color" d="M14 19V5h4v14Zm-8 0V5h4v14Z" />
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