<template>
    <div>
        <Nav></Nav>
        <main class="content-center mr-auto ml-auto max-w-4xl">
            <div>
                <router-view></router-view>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

</script>

<style scoped>

</style>