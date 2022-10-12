<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
        <path :fill="color"
            d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 3.175-1.95 5.612-1.95 2.438-5.05 3.138ZM3 15V9h4l5-5v16l-5-5Zm11 1V7.95q1.175.55 1.838 1.65.662 1.1.662 2.4 0 1.275-.662 2.362Q15.175 15.45 14 16Zm-4-7.15L7.85 11H5v2h2.85L10 15.15ZM7.5 12Z" />
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