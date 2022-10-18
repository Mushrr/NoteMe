<template>
    <nav class="p-2 h-12 border-b-2 dark:border-gray-800 flex flex-row items-center place-content-between">
        <span class="flex flex-row items-center" @click="main">
            <span
                class="rounded-full border-black w-8 h-8 bg-center flex flex-row items-center place-content-center overflow-hidden">
                <img :src="avator" class="w-9 h-12" alt="nanami" />
            </span>
            <span class="pl-4 dark:text-gray-200">{{author}}</span>
        </span>
        <span>
            <input placeholder="search some" class="border-b-2 border-black h-8 dark:bg-black dark:text-white" />
        </span>
        <span class="flex flex-row items-center">
            <span class="relative mr-2" @mouseout="showLinks=false">
                <span class="dark:text-white" @mouseover="showLinks=true">links</span>
                <transition>
                    <ul class="absolute
                    p-2
                    border-2
                    bg-[#ffffff]
                    dark:bg-black
                    transition-all
                    duration-300
                    rounded-xl
                    z-50
                    " 
                    @mouseover="showLinks=true" v-if="showLinkBlock">
                        <li class="dark:text-white" v-for="link of relLink">
                            <a class="mr-2 hover:ml-2 transition-all duration-100" :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                </transition>
            </span>
            <to-dark-button></to-dark-button>
            <router-link class="mr-2 ml-2 hover:underline dark:text-white" to="/about">about</router-link>
        </span>
    </nav>
</template>

<script lang="ts" setup>
import { author, avator, relLink } from '../config';
import { onBeforeMount, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ToDarkButton from './ToDarkButton.vue';


const router = useRouter();
const showLinks = ref(false);
const showLinkBlock = ref(false);

function main() {
    router.push({
        path: '/mainboard',
        replace: true
    })
}

let timer: NodeJS.Timeout;

watch(showLinks, (val, old) => {
    if (!val) {
        timer = setTimeout(() => {
            showLinks.value = false;
            showLinkBlock.value = false;
        }, 50)
    } else {
        showLinkBlock.value = true;
        clearTimeout(timer);
    }
})


</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>