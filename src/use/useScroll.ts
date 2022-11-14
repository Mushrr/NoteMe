import { ref, onMounted, onUnmounted } from 'vue';

export default function useScroll() {
    const x = ref(0), y = ref(0);

    const listemScroll = function (e: Event) {
        x.value = window.pageXOffset;
        y.value = window.pageYOffset;
    }

    onMounted(() => {
        window.addEventListener('scroll', listemScroll);
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', listemScroll); // 移除
    })


    return {
        x,
        y
    }
}