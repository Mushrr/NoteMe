<template>
    <div class="dark:bg-black">
        <Nav></Nav>
        <main class="content-center mr-auto ml-auto max-w-4xl dark:text-white">
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
import useTheme from '../state/useTheme';

const theme = useTheme();
if ( theme.theme === 'dark' ) {
    theme.toDark();
} else {
    theme.toLight();
}

</script>

<style scoped>

</style>