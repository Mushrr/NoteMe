<template>
    <p class="border-b-2 pl-4 pr-4" ref="curRefLink" >
        {{props.content}}
    </p>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { isEditor } from '../../utils'

const curRefLink = ref(null);



const props = defineProps({
    elementId: String,
    content: String,
    contenteditable: Boolean
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

<style scoped>

</style>