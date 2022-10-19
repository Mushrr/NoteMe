<template>
    <div class="
    flex flex-row 
    place-content-center h-44 bg-cover bg-center
    md:h-56 rounded-xl shadow-2xl m-2 relative
    " :style="{backgroundImage: `url(${props.href})`, height: isMobile ? 224 + 'px' : height + 'px' }"
        :alt="props.alt">
        <div>

        </div>
    </div>
</template>

<script lang='ts' setup>
import { watch, ref, onMounted } from 'vue';
import useWindowSize from '../../use/useWindowSize'

const { height: h, width: w } = useWindowSize();
const isMobile = ref(false);

const props = defineProps({
    href: String,
    alt: String,
    height: Number,
    contenteditable: Boolean
})

watch(w, (val) => {
    if (val > 500) {
        isMobile.value = false;
    } else {
        isMobile.value = true;
    }
})

onMounted(() => {
    if (w.value > 500) {
        isMobile.value = false;
    } else {
        isMobile.value = true;
    }
})
</script>

<style scoped>

</style>