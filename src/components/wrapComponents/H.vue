<template>
    <div >
        <div class="
        relative
        md:left-4
        ml-2
        ">
            <p class="border-l-4 pl-2 border-blue-400" :style="{fontSize: sigmoid(props.level) * 10 + 'rem'}">
                {{props.content}}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

function sigmoid(level: number) {
    return 1 / (1 + Math.pow(Math.E, level))
}

const props = defineProps({
    level: {
        type: Number,
        required: true
    },
    content: String,
    children: Array
})
</script>


<style>

</style>