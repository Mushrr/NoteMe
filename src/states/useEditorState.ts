import { EditorPageElement } from './../types';
import { defineStore } from 'pinia';

const useEditorState = defineStore('editor', {
    state: () => ({
        activeElement: {}, // string 类型的元素ID， 唯一
        currPageSate: [
            // 是一个数组
            // 维护当前页面中的所有元素
            /**
             * 元素必要的属性
             * 1. ID 创建的时候唯一分配
             * 2. Type 元素的类型
             * 3. reflink 链接的元素 - 如果可以的话, 还需要经过测试
             */
            {
                elementId: 'aa',
                type: 'h',
                content: 'Mushroom',
                parent: undefined,
                reflink: null
            },
            {
                elementId: 'bb',
                type: 'h',
                content: 'Cookie',
                parent: undefined,
                reflink: null
            },
        ]
    }),
    actions: {
        // method
        changeActive(activeId: string) {
            // @ts-ignore
            this.activeElement = this._find(activeId, this.currPageSate); // 激活
        },

        _find(elementId: string, from: EditorPageElement): object {
            console.log(from);
            for (let el of from) {
                if (el.elementId === elementId) {
                    return el;
                } else if (el.children) {
                    return this._find(elementId, el.children); // 递归搜索
                }
            }
            return { message: "Not Find", code: -1 }
        },

        _del(elementId: string) {
            // @ts-ignore
            let node = this._find(elementId, this.currPageSate); // 找元素
            // @ts-ignore
            if (!node.parent) {
                let index = this.currPageSate.indexOf(node); // 找到元素
                console.log(index);
                this.move('up');
                this.currPageSate.splice(index, 1); // 从index 起删除一个
            } else {
                let index = node.parent.children.indexOf(node);
                node.parent.children.slice(index, 1);
            }
        },

        move(moveType: "up" | "down") {
            // 注意区分链接模式

            // 找元素位置
            // 确定好元素位置之后
            // 如果既不是第一个也不是最后一个
            // 那么往下条一个元素
            // parent.children[next+1].reflink.focus()
            // 如果是则往上寻找一个
            // 借助父元素，看看父元素满不满足 
            // 往上移动
            // @ts-ignore
            if (!this.activeElement.parent) {
                // 当前元素是顶级元素

                // @ts-ignore
                let index = this.currPageSate.indexOf(this.activeElement); // 遍历查找
                console.log(index);
                if (moveType === "up") {
                    if (index !== 0) {
                        this.activeElement = this.currPageSate[index - 1];
                    }
                } else if (moveType === "down") {
                    if (index !== this.currPageSate.length - 1) {
                        this.activeElement = this.currPageSate[index + 1];
                    }
                }
                // @ts-ignore
                this.activeElement.reflink.focus();
            } else {
                // 非根元素
            }
        }
    }
})

export default useEditorState