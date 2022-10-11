<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
        <path :fill="color" d="M14 19V5h4v14Zm-8 0V5h4v14Z" />
    </svg>
</template>

<script lang='ts' setup>
import useTheme from '../state/useTheme';
import {onBeforeMount} from 'vue';

const theme = useTheme();

let color = "";


const props = defineProps(['height', 'width', 'color'])


onBeforeMount(() => {
    if (theme.theme === 'dark') {
        return props.color.light;
    } else {
        return props.color.dark;
    }
})
</script>

<style scoped>

</style>