<template>
    <button @click="theme.switchTheme">
            <!-- <Transition name="slide"> -->
                <!-- v-if -->
                <span v-show="theme.theme === 'light'">
                    <Sun height="24" width="24" :color="iconColor"></Sun>
                </span>
                <!-- 如果一开始这个就是false的话 -->
                <!-- v-show 只要条件变化就会重新渲染 -->
                <span v-show="theme.theme === 'dark'">
                    <Moon height="24" width="24" :color="iconColor"></Moon>
                </span>
            <!-- </Transition> -->
        </button>
</template>

<script lang='ts' setup>
import Sun from '../Icons/sun.vue';
import Moon from '../Icons/moon.vue';
import { onBeforeMount, ref } from 'vue';
import useTheme from '../state/useTheme';


const isDark = ref(false);
const theme = useTheme();
const iconColor = ref({
    dark: '#ffffff',
    light: '#000000'
})


onBeforeMount(() => {
    if (localStorage.getItem('blog_theme') === 'dark') {
        isDark.value = true;
    }
})


</script>

<style scoped>
@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(180deg);
    }
}


.slide-active-enter-active,
.slide-active-leave-active {
    transition: all 0.25s ease-out
}

.slide-leave-from {
    opacity: 0;
    transform: translateY(30px)
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-30px)
}

</style>