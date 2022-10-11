<template>
    <div class="relative">
        
        <div class="dark:text-white border-2 dark:border-gray-400 rounded-2xl p-2 flex flex-row items-center">
            <div class="w-8 border-r-2" @click="pauseAndPlay" :style="{cursor: canPlay ? 'pointer' : 'wait'}">
                <play :height="24" :width="24" :color="iconColor" v-if="playing"></play>
                <pause :height="24" :width="24" :color="iconColor" v-else></pause>
            </div>
            <div class="md:w-[710px] w-6/12 h-1 bg-gray-600">
                <div class="h-1 bg-white" :style="{width: currentWidth}"></div>
            </div>
            <div class="text-center ml-2">
                {{currentTime}} / {{totalTime}}
            </div>
            <div class="text-center mr-auto ml-auto ">
                <mute :height="24" :width="24" :color="iconColor" v-if="muted"></mute>
                <volume :height="24" :width="24" :color="iconColor" v-else></volume>
            </div>
        </div>
        <audio ref="audioElement">
            <source :src="props.href"/>
        </audio>
    </div>
</template>

<script lang='ts' setup>
import {onMounted, ref, Ref, computed} from 'vue';
import Play from '../../Icons/play.vue';
import Pause from '../../Icons/pause.vue';
import Mute from '../../Icons/mute.vue';
import Volume from '../../Icons/volume.vue';

const props = defineProps({
    href: String
})

const audioElement: Ref<HTMLAudioElement | null> = ref(null);
const playing = ref(false);
const canPlay = ref(false);
const currentAudioNode: Ref<HTMLAudioElement | null> = ref(null);
const _currentTime = ref(0);
const _totalTime = ref(0);
const muted = ref(false);
const iconColor = ref({
    dark: '#ffffff',
    light: '#000000'
})

function numToTime(secends: number) {
    let minites = Math.floor(secends / 60);
    let leftSecends = secends - minites * 60;
    return `${minites}:${leftSecends}`;
}

const currentTime = computed(() => {
    // 当前事件的精确计时
    let secends = Math.floor(_currentTime.value); // 向下取整
    return numToTime(secends);
})

const totalTime = computed(() => {
    let secends = Math.floor(_totalTime.value);
    return numToTime(secends);
})

const currentWidth = computed(() => {
    console.log((_currentTime.value / _totalTime.value).toPrecision(1));
    if (_totalTime.value === 0) {
        return `0%`;
    } else {
        let precent = Math.round(_currentTime.value * 1000 / _totalTime.value) / 10 ;
        return `${precent}%` 
    }
})

function pauseAndPlay() {
    if (canPlay.value) {
        // 可以播放
        let audio = audioElement.value as HTMLAudioElement;
        if (playing.value) {
            audio.pause();
        } else {
            audio.play();
        }
        playing.value = !playing.value;
        
    }
}

onMounted(() => {
    let audio = (audioElement.value as HTMLAudioElement);
    audio.addEventListener('loadeddata', (e) => {
        console.log("数据加载成功");
        console.log(e.target);

    })
    audio.addEventListener('canplay', (e) => {
        console.log('可以播放');
        console.log(audio.duration);
        _totalTime.value = audio.duration;
        canPlay.value = true;
        audio.addEventListener('play', (e) => {
            console.log('播放');
        })
        audio.addEventListener('pause', (e) => {
            console.log('暂停');
        }) 
        audio.addEventListener('timeupdate', (e) => {
            console.log(audio.currentTime);
            _currentTime.value = audio.currentTime;
        })
    })

})


</script>

<style scoped>

</style>