<template>
    <div class="
    relative
    
    border-2 p-2
    rounded-2xl shadow-xl
      md:mr-auto md:ml-auto
    ">
    <!-- {{props}} -->
        <div class="">
            <span v-if="props.icon || props.sectitle">
                <span :contenteditable="props.contenteditable" class="pr-4" v-if="props.icon">{{props.icon}}</span>
                <span :contenteditable="props.contenteditable" v-if="props.sectitle">{{props.sectitle}}</span>
            </span>
        </div>
        <div>
            <template v-for="row in props.content">
                <template v-if="typeof row === 'string'">
                    <SimpleTextRow :content="row" :contenteditable="props.contenteditable"></SimpleTextRow>
                </template>
                <template v-if="(row as Sec).type">
                    <WrapRender :data="[row]" :contenteditable="props.contenteditable"></WrapRender>
                </template>
            </template>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { Sec } from '../../types';
import SimpleTextRow from './SimpleTextRow.vue';
import WrapRender from '../WrapRender.vue';

interface SimpleText extends Sec {
    icon?: String,
    sectitle?: String,
    content: Array<String | Sec>, // 即允许字符串 又允许 Sec 元素,
    contenteditable: Boolean
}

const props = defineProps<SimpleText>()

</script>

<style scoped>

</style>