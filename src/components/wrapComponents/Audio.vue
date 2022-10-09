<template>
    <div class="relative">
        <audio controls class="w-11/12" style="{background-image: url('/assets/image/nanami.jpg')}">
            <source :src="props.href"/>
        </audio>
    </div>
</template>

<script lang='ts' setup>
const props = defineProps({
    href: String
})
</script>

<style scoped>

</style>