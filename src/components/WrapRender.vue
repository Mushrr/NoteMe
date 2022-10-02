<template>
    <template v-for="sec in props.data">
        <template v-if="sec.type === 'h'">
            <H :level="sec.level" :content="sec.content" :contenteditable="props.contenteditable" @focus="emitFocus(sec)">
                <template v-if="sec.children">
                    <WrapRender :data="sec.children" :contenteditable="props.contenteditable"></WrapRender>
                </template>
            </H>
        </template>

        <template v-if="sec.type === 'simpletext'">
            <SimpleText 
            :icon="sec.icon" 
            :sectitle="sec.sectitle"
            :content="sec.content"
            :contenteditable="props.contenteditable"
            >
            </SimpleText>
        </template>
        <template v-if="sec.type === 'simpletextrow'">
            <SimpleTextRow :content="sec.content" :contenteditable="props.contenteditable"></SimpleTextRow>
        </template>
        <template v-if="sec.type === 'imagegallery'">
            <ImageGallery :href="sec.href" :alt="sec.alt" :contenteditable="props.contenteditable"></ImageGallery>
        </template>
    </template>
</template>

<script lang="ts" setup>
import H from './wrapComponents/H.vue';
import {Sec} from '../types'
import SimpleText from './wrapComponents/SimpleText.vue';
import ImageGallery from './wrapComponents/ImageGallery.vue';
import SimpleTextRow from './wrapComponents/SimpleTextRow.vue';

const emits = defineEmits(['changeFocus']);

function emitFocus(el) {
    console.log('Focus');
    console.log(el);
    emits('changeFocus', el);
}

const props = defineProps<{
    data: Array<Sec>;
    contenteditable: Boolean
}>()
</script>


