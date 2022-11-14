import { Ref } from "vue";
import { NoteMeElement } from "./types";

function randomStr(length: number) {
    let base = "";
    let singleLength = 5;
    let currLength = 0;
    for (; currLength + singleLength < length; currLength += singleLength) {
        base += Math.random().toString(32).slice(2, 2 + singleLength);
    }
    base += Math.random().toString().slice(2, length - currLength + 2); // 补齐
    return base;
}


function createNode(elementName: NoteMeElement, options?: { [props: string]: any }) {
    // 工厂函数
    if (elementName === 'H') {
        return {
            elementId: randomStr(32),
            type: 'h',
            level: options!.level,
            content: "edit some",
            children: [],
            reflink: null
        }
    } else if (elementName === 'SimpleText') {
        return {
            elementId: randomStr(32),
            type: 'simpletext',
            icon: '🍎',
            sectitle: 'title',
            children: [
                "Edit some"
            ],
            reflink: null
        }
    } else if (elementName === 'ImageGallery') {
        return {
            elementId: randomStr(32),
            type: 'imagegallery',
            href: '',
            alt: '',
            reflink: null
        }
    } else if (elementName === 'SimpleTextRow') {
        return {
            elementId: randomStr(32),
            type: 'simpletextrow',
            content: 'edit some',
            reflink: null
        }
    }
}

function isEditor(contenteditable: boolean, callback: (...args: any[]) => any) {
    if (contenteditable) {
        callback();
    }
}

function imageLazyLoad(src: string, reference: Ref<string>) {
    let image = new Image();
    image.src = src;
    image.addEventListener("load", () => {
        reference.value = src;
    })
}
export {
    randomStr,
    createNode,
    isEditor,
    imageLazyLoad
}