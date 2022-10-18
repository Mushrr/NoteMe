<template>
    <template v-for="sec in props.data">
        <template v-if="sec.type === 'h'">
            <H :level="sec.level" :content="sec.content" :elementId="sec.elementId">
                <template v-if="sec.children">
                    <WrapRender :data="sec.children"></WrapRender>
                </template>
            </H>
        </template>

        <template v-if="sec.type === 'simpletext'">
            <SimpleText :icon="sec.icon" :sectitle="sec.sectitle" :children="sec.children" :elementId="sec.elementId">
            </SimpleText>
        </template>
        <template v-if="sec.type === 'simpletextrow'">
            <SimpleTextRow :content="sec.content"></SimpleTextRow>
        </template>
        <template v-if="sec.type === 'imagegallery'">
            <ImageGallery :href="sec.href" :alt="sec.alt" :height="sec.height"></ImageGallery>
        </template>
        <template v-if="sec.type === 'audio'">
            <Audio :href="sec.href"></Audio>
        </template>
        <template v-if="sec.type === 'mermaid'">
            <Mermaid :content="sec.content" :tags="sec.tags" :icon="sec.icon" :theme="sec.theme" :align="sec.align"></Mermaid>
        </template>
    </template>
</template>

<script lang="ts" setup>
import H from './wrapComponents/H.vue';
import { Sec } from '../types'
import SimpleText from './wrapComponents/SimpleText.vue';
import ImageGallery from './wrapComponents/ImageGallery.vue';
import SimpleTextRow from './wrapComponents/SimpleTextRow.vue';
import Audio from './wrapComponents/Audio.vue';
import Mermaid from './wrapComponents/Mermaid.vue';


const props = defineProps<{
    data: Array<Sec>;
}>()
</script>


