<template>
    <div class="
    flex flex-row 
    place-content-center h-44 bg-cover bg-center
    md:h-56 rounded-xl shadow-2xl m-2 relative
    " :style="{backgroundImage: `url(${props.href})`}" :alt="props.alt">
        <div>
            
        </div>
    </div>
</template>

<script lang='ts' setup>

const props = defineProps({
    href: String,
    alt: String
})
</script>

<style scoped>

</style>