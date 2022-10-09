import { ref, onMounted, onUnmounted } from 'vue';


export default function useWindowSize() {
    const height = ref(0);
    const width = ref(0);

    function update() {
        height.value = window.innerHeight;
        width.value = window.innerWidth;
    }

    onMounted(() => {
        
        window.addEventListener('load', update);
        window.addEventListener('resize', update);
    })

    onUnmounted(() => {
        window.removeEventListener('load', update);
        window.removeEventListener('resize', update);
    })

    return {
        width,
        height
    }
}