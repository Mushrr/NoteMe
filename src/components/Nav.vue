<template>
    <nav class="p-2 h-12 border-b-2 flex flex-row items-center place-content-between">
        <span class="flex flex-row items-center">
            <span class="rounded-full border-black w-8 h-8 bg-center flex flex-row items-center place-content-center overflow-hidden">
                <img :src="imagePath" class="w-9 h-12" alt="nanami" @click="edit()"/>
            </span>
            <span class="pl-4">Mushr</span>
        </span>
        <span>
            <input placeholder="search some" class="border-b-2 border-black h-8"/>
        </span>
        <span class="">
            <router-link class="mr-2 hover:underline" to="/about">about me</router-link>
            <router-link class="hover:underline" to="/blog">blogs</router-link>
        </span>
    </nav>
</template>

<script lang="ts" setup>
import { baseURL } from '../config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({

})

const imagePath = ref(`${baseURL}/image/o2eqbmmat9ae3esh7jetkkc95sianr12.jpeg`);

function edit() {
    router.push({
        path: '/editor'
    })
}

</script>

<style scoped>

</style>