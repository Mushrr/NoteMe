<template>
    <div class="relative md:left-4 mt-2">
        <div id="wraper" class="p-4 border-2 rounded-xl">
            <div id="tags" class="flex flex-row items-center flex-wrap" v-if="props.tags">
                <span class="text-4xl border-r-2 mr-2" v-if="props.icon">{{props.icon}}</span>
                <span v-for="tag in tags" key="tag" class="
            mr-2 
            p-1 
            border-2 
            rounded-xl 
            dark:bg-gray-800
            dark:border-gray-600 
            dark:text-white
            border-gray-400
            bg-gray-200
            dark:hover:text-gray-400
            hover:bg-gray-300
            
            ">
                    {{tag}}
                </span>
            </div>
            <div ref="mermaidUnit" :style="{placeContent: (align === 'invalid' ? 'left' : align), 
            display: align !== 'invalid' ? 'flex' : 'default'}">

            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
// TODO
// * [ ]: How to load a mermaid
// * [ ]: Theme Control
import { storeToRefs } from 'pinia';
import { onMounted, watch, ref, Ref, computed } from 'vue';
import useTheme from '../../state/useTheme';
import mermaid, { Config } from 'mermaid';
import { random } from 'gsap';
import { randomStr } from '../../utils';

const props = defineProps({
    content: {
        type: Array<string>,
        required: true
    },
    tags: {
        type: Array<string>,
    },
    icon: {
        type: String
    },
    theme: {
        type: String
    },
    align: {
        type: String
    }
})

const mermaidContent = computed(() => {
    return props.content.reduce((p, c) => {
        return p + '\n' + c;
    })
})

const align = computed(() => {
    if (props.align === "left") {
        return "start";
    } else if (props.align === "right") {
        return "end";
    } else if (props.align === "center") {
        return "center";
    } else {
        return "invalid";
    }
})

const mermaidUnit: Ref<null | HTMLElement> = ref(null);

const { theme } = storeToRefs(useTheme()); // ???????????????
const renderAns = ref("");
const mermaidId = 'mer' + randomStr(10);

function mermaidRender(mermaidId: string, options: Config) {
    if (props.theme) {
        // @ts-ignore
        options.theme = props.theme;
    }

    mermaid.initialize(options);

    mermaid.mermaidAPI.render(mermaidId, mermaidContent.value, (svgCode) => {
        (mermaidUnit.value as HTMLElement).innerHTML = svgCode;
    });
}

watch(theme, (val, newVal) => {
    // ????????????
    console.log("Mermaid ????????????", val);
    let currentTheme: 'forest' | 'default' | 'dark' | 'neutral' = 'forest';
    if (val === 'dark') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'neutral'
    }
    mermaidRender(mermaidId, {
        theme: currentTheme
    })
})

onMounted(() => {
    // ?????????
    let currentTheme: 'forest' | 'default' | 'dark' | 'neutral' = 'forest';
    if (theme.value === 'dark') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'neutral';
    }
    mermaidRender(mermaidId, {
        theme: currentTheme
    })
})


</script>

<style scoped>

</style>