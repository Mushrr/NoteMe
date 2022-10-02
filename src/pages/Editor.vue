<template>
    <div id="wraper" class="relative">
        <HoverImage ></HoverImage>
        <div id="editor" ref="editor" @keypress="notice($event)">
            <WrapRender :data="editorPageState.currPageSate" :contenteditable="true"></WrapRender>
        </div>
        <div id="selectionbox" class="absolute w-36 max-h-48 overflow-y-scroll" ref="selecttionbox"
            :style="{'visibility': hidden ? 'hidden' : 'visible' }">
            <div v-for="command in commandList" :style="{backgroundColor: command.selected ? '#f3f3f3f3' : '#ffffff'}"
                @mouseover="command.selected = true" @mouseout="command.selected = false">
                <span>{{command.icon}}</span>
                <span>{{command.content}}</span>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import WrapRender from '../components/WrapRender.vue';
import { NoteMeElement } from '../types';
import HoverImage from '../components/HoverImage.vue';
import useEditorState from '../states/useEditorState';

const editorPageState = useEditorState();  



const editor = ref(null);
const currentFocus = ref(null);
const selecttionbox = ref(null);
const hidden = ref(true);

const commandList = ref([
    {
        icon: '🧊', // image or ? xxx
        content: 'H1',
        value: 'H',
        component: import('../components/wrapComponents/H.vue'),
        selected: false,
        data: {
            level: 1
        },
    },
    {
        icon: '🧊', // image or ? xxx
        content: 'H2',
        value: 'H',
        component: import('../components/wrapComponents/H.vue'),
        selected: false,
        data: {
            level: 2
        }
    },
    {
        icon: '🧊', // image or ? xxx
        content: 'H3',
        value: 'H',
        component: import('../components/wrapComponents/H.vue'),
        selected: false,
        data: {
            level: 3
        }
    },
    {
        icon: '✉️',
        content: 'SimpleText',
        value: 'SimpleText',
        component: import('../components/wrapComponents/SimpleText.vue'),
        selected: false
    },
])
const selectIndex = ref(0);
const currentBlock = ref(0);
/**
 * Editor location
 */

/**
 * 执行插入指令，当前的位置，检测逻辑
 * 
 * 
*/
function createNode(elementName: NoteMeElement, options?: { [props: string]: any }) {
    // 工厂函数
    if (elementName === 'H') {
        return {
            type: 'h',
            level: options!.level,
            content: "edit some",
            link: null
        }
    } else if (elementName === 'SimpleText') {
        return {
            type: 'simpletext',
            icon: '🍎',
            sectitle: 'title',
            content: [
                "Edit some"
            ],
            link: null
        }
    } else if (elementName === 'ImageGallery') {
        return {
            type: 'imagegallery',
            href: '',
            alt: '',
            link: null
        }
    } else if (elementName === 'SimpleTextRow') {
        return {
            type: 'simpletextrow',
            content: 'edit some',
            link: null
        }
    }
}


function notice(e: KeyboardEvent) {
    console.log(editor.value);
    // @ts-ignore
    currentFocus.value = document.activeElement;
    // show up
    if (e.key === '/') {
        console.log(e);
        hidden.value = false;
    }
    // 确认按钮

    if (!hidden.value) {
        if (e.key === 'enter') {

        }
    }

}


onMounted(() => {
    // @ts-ignore
    currentFocus.value = document.activeElement;
    document.addEventListener('keydown', e => {
        let beforeDeleteElementValue = (currentFocus.value! as HTMLElement).textContent;
        // 如果检测到 ESC hidden
        if (e.code === 'Escape') {
            hidden.value = true;
            selectIndex.value = 0;
        }
        // 倒退的时候如果检测到 / 那么hidden
        if (e.code === 'Backspace') {
            let beforeDeleteElementValue = (currentFocus.value! as HTMLElement).textContent;
            if (beforeDeleteElementValue?.charAt(beforeDeleteElementValue.length - 1) === '/') {
                hidden.value = true;
                selectIndex.value = 0;
            }
        }

        console.log(e);
        if (hidden.value === false) {
            // 检测上下选择富文本事件
            // 如果已经触发了 ArrowUp or ArrowDown 那么久阻止
            if (e.key === 'ArrowDown') {
                e.preventDefault();

                if (selectIndex.value + 1 < commandList.value.length) {
                    commandList.value[selectIndex.value].selected = false;
                    selectIndex.value += 1;
                    commandList.value[selectIndex.value].selected = true;
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();

                if (selectIndex.value - 1 > -1) {
                    commandList.value[selectIndex.value].selected = false;
                    selectIndex.value -= 1;
                    commandList.value[selectIndex.value].selected = true;
                }
            }
            // @ts-ignore
            selecttionbox.value.scrollTo({
                top: 12 * selectIndex.value,
                behavior: 'smooth'
            });

            if (e.key === 'Enter') {
                e.preventDefault(); // 阻止
                let element = createNode(commandList.value[selectIndex.value].value as NoteMeElement, commandList.value[selectIndex.value].data!)
                console.log(element);
                page.value.push(element);
                console.log(page.value);
            }
        } else {
            
            if (beforeDeleteElementValue === '' && e.key === 'Enter') {
                // @ts-ignore
                page.value.push(createNode('SimpleTextRow'));
            } else if (beforeDeleteElementValue === '' && e.key === 'Backspace') {
                // 删除元素
                
            }
            // e.preventDefault();

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                
                editorPageState.move('down');
                
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();

                editorPageState.move('up');
            }
        }
    })
})

function changeBind(el: object) {
    // 子组件抛出focus事件， 父组件更新 index
    // 也可以基于此删除
    console.log(el);
}

onUnmounted(() => {

})


</script>

<style scoped>

</style>