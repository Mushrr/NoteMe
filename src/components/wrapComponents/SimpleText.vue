<template>
    <div class="
    relative
    
    border-2 p-2
    rounded-2xl shadow-xl
      md:mr-auto md:ml-auto
    ">
        <div class="">
            <span v-if="props.icon || props.sectitle">
                <span class="pr-4" v-if="props.icon">{{props.icon}}</span>
                <span v-if="props.sectitle">{{props.sectitle}}</span>
            </span>
        </div>
        <div>
            <template v-for="row in props.children">
                <template v-if="typeof row === 'string'">
                    <SimpleTextRow :content="row"></SimpleTextRow>
                </template>
                <template v-if="(row as Sec).type">
                    <WrapRender :data="[row]"></WrapRender>
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
    elementId: string,
    icon?: String,
    sectitle?: String,
    children?: Array<Sec | string>,
    contenteditable: Boolean,
}

const props = defineProps<SimpleText>()

</script>

<style scoped>

</style>