<template>
    <div>
        <div class="
        relative
        md:left-4
        ml-2
        mt-2
        ">
            <p :contenteditable="props.contenteditable" class="border-l-4 pl-2 border-blue-400 dark:border-blue-600 dark:text-gray-400"
                :style="{fontSize: sigmoid(props.level) * 10 + 'rem'}" ref="curRefLink" 
                >
                {{props.content}}
            </p>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { isEditor } from '../../utils'

const curRefLink = ref(null);

function sigmoid(level: number) {
    return 1 / (1 + Math.pow(Math.E, level))
}



const props = defineProps({
    level: {
        type: Number,
        required: true
    },
    content: String,
    children: Array,
    contenteditable: Boolean,
    elementId: String,
})



onMounted(() => {
    isEditor(props.contenteditable, () => {
        // @ts-ignore
        let currentNode = editorPageState._find(props.elementId!, editorPageState.currPageSate); // 从根路径查找这个元素. 找到了就返回
        // @ts-ignore
        if (currentNode.code === -1) {
            throw `Error, Can't find node whose elementId is ${props.elementId}`
        } else {
            // @ts-ignore

            currentNode.reflink = reactive(curRefLink);
        }
        window.addEventListener('keydown', (e) => {
            // @ts-ignore
            if (e.key === 'Backspace' && curRefLink.value.innerText === "") {
                // @ts-ignore
                editorPageState._del(props.elementId);
                console.log("尝试del")
            }
        })
    })
})
</script>


<style>

</style>