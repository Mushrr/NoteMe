<template>
    <nav class="p-2 h-12 border-b-2 flex flex-row items-center place-content-between">
        <span class="flex flex-row items-center" @click="main">
            <span class="rounded-full border-black w-8 h-8 bg-center flex flex-row items-center place-content-center overflow-hidden">
                <img :src="avator" class="w-9 h-12" alt="nanami" />
            </span>
            <span class="pl-4">{{author}}</span>
        </span>
        <span>
            <input placeholder="search some" class="border-b-2 border-black h-8"/>
        </span>
        <span class="">
            <template v-for="link of relLink">
                <a class="mr-2 hover:underline"
                    :href="link.url"
                >{{link.text}}</a>
            </template>
            <router-link class="mr-2 hover:underline" to="/about">about me</router-link>
        </span>
    </nav>
</template>

<script lang="ts" setup>
import { author, avator, relLink } from '../config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

function main() {
    router.push({
        path: '/mainboard',
        replace: true
    })
}

</script>

<style scoped>

</style>