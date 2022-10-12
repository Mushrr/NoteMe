<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
        <path :fill="color"
            d="M10.771 11.25Zm.291 7.75H8.667l.25-.24q.25-.239.552-.52.302-.282.552-.511l.25-.229h.937q1.813 0 3.334-.938 1.52-.937 2.333-2.541-1.729-.104-3.302-.823t-2.802-1.948Q9.521 10 8.812 8.438q-.708-1.563-.833-3.313Q6.333 6 5.417 7.635 4.5 9.271 4.5 11.167v.145l-.229.105q-.229.104-.49.218-.26.115-.489.219l-.23.104q-.041-.312-.052-.552-.01-.239-.01-.468 0-2.917 1.854-5.157Q6.708 3.542 9.583 3q-.354 2.021.302 3.958.657 1.938 2.115 3.396 1.375 1.375 3.229 1.896 1.854.521 3.771.167-.5 2.895-2.75 4.739Q14 19 11.062 19ZM5.5 17.479h3.25q.521 0 .885-.364.365-.365.365-.886 0-.458-.292-.802-.291-.344-.75-.406l-.833-.146-.313-.792q-.291-.729-.916-1.156Q6.271 12.5 5.5 12.5q-1.042 0-1.771.719Q3 13.938 3 15q0 1.042.729 1.76.729.719 1.771.719ZM5.5 19q-1.667 0-2.833-1.167Q1.5 16.667 1.5 15q0-1.667 1.167-2.833Q3.833 11 5.5 11q1.25 0 2.281.677 1.031.677 1.448 1.865.979.166 1.625.937t.646 1.771q0 1.146-.802 1.948T8.75 19Z" />
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