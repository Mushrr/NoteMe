import { EditorPageElement, Sec } from './../types';
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
                children: [],
                reflink: null
            },
            {
                elementId: 'bb',
                type: 'h',
                content: 'Cookie',
                parent: undefined,
                children: [],
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
                } else if (el.children?.length !== 0) {
                    return this._find(elementId, el.children); // 递归搜索
                }
            }
            return { message: "Not Find", code: -1 }
        },

        _del(elementId: string, newNode: Sec | undefined) {
            // @ts-ignore
            let node = this._find(elementId, this.currPageSate); // 找元素
            console.log(`尝试删除 ${elementId}`, node);
            // @ts-ignore
            if (!node.parent) {
                let index = this.currPageSate.indexOf(node); // 找到元素
                console.log(index);
                this.currPageSate.splice(index, 1); // 从index 起删除一个
                if (newNode) {
                    this.currPageSate.splice(index, 0, newNode); // 在这元素上面添加一个
                }
                this.move('up');
                console.log(this.currPageSate);
            } else {
                let index = node.parent.children.indexOf(node);
                node.parent.children.slice(index, 1);
                if (newNode) {
                    this.currPageSate.splice(index, 0, newNode); // 在这元素上面添加一个
                }
            }
        },

        move(moveType: "up" | "down", jump: "on" | "off") {
            // 注意区分链接模式

            // 找元素位置
            // 确定好元素位置之后
            // 如果既不是第一个也不是最后一个
            // 那么往下条一个元素
            // parent.children[next+1].reflink.focus()
            // 如果是则往上寻找一个
            // 借助父元素，看看父元素满不满足 
            // 往上移动

            /**
             TODO
             */
            // @ts-ignore
            if (moveType === "down") {
                // 看看有没有子节点，并且是非跳跃模式
                if (jump === 'off') {
                    if (this.activeElement.children.length !== 0) {
                        this.activeElement = this.activeElement.children[0];
                    } else {
                        if (!this.activeElement.parent) {
                            let index = this.currPageSate.indexOf(this.activeElement);
                            if (index < this.currPageSate.length - 1) {
                                this.activeElement = this.currPageSate[index + 1];
                            }
                        } else {
                            let index = this.activeElement.parent.children.indexOf(this.activeElement);
                            if (index === this.activeElement.parent.children.length - 1) {
                                this.activeElement = this.activeElement.parent;
                                this.move('down', 'on'); // 跳转
                            } else {
                                this.activeElement = this.activeElement.parent.children[index + 1];
                            }
                        }
                    }
                } else {
                    if (!this.activeElement.parent) {
                        // 父元素为空
                        let index = this.currPageSate.indexOf(this.activeElement);
                        if (index < this.currPageSate.length - 1) {
                            this.activeElement = this.currPageSate[index + 1];
                        }
                    } else {
                        let index = this.activeElement.parent.children.indexOf(this.activeElement);
                        if (index === this.activeElement.parent.children.length - 1) {
                            this.activeElement = this.activeElement.parent;
                            this.move('down', 'on'); // 跳转
                        } else {
                            this.activeElement = this.activeElement.parent.children[index + 1];
                        }
                    }
                }
            } else {
                if (jump === 'off') {
                    console.log(this.currPageSate);
                    console.log(this.activeElement);
                    if (!this.activeElement.parent) {
                        let index = this.currPageSate.indexOf(this.activeElement);
                        if (index > 0) {
                            this.activeElement = this.currPageSate[index - 1];
                        }
                    } else {
                        let index = this.activeElement.parent.children.indexOf(this.activeElement);
                        if (index === 0) {
                            this.activeElement = this.activeElement.parent;
                            this.move('up', 'on'); // 跳转
                        } else {
                            this.activeElement = this.activeElement.parent.children[index - 1];
                        }
                    }
                } else {
                    if (!this.activeElement.parent) {
                        // 父元素为空
                        let index = this.currPageSate.indexOf(this.activeElement);
                        if (index > 0) {
                            this.activeElement = this.currPageSate[index - 1];
                        }
                    } else {
                        let index = this.activeElement.parent.children.indexOf(this.activeElement);
                        if (index === 0) {
                            this.activeElement = this.activeElement.parent;
                            this.move('up', 'on'); // 跳转
                        } else {
                            this.activeElement = this.activeElement.parent.children[index - 1];
                        }
                    }
                }
            }
            this.activeElement.reflink.focus();
        },

        /**
         * 
         * @param node: 传入的元素, 尝试插入 
         */
        addElement(node: Sec) {
            // 如果当前元素为空，那么执行删除再添加
            // @ts-ignore
            if (this.activeElement.content === "/new") {
                this.currPageSate.push(node);
                node.parent = undefined;
            } else if (this.activeElement.content === "/" && this.activeElement.children.length === 0) {
                console.log("这里看看怎么回事?");
                this._del(this.activeElement.elementId, node);
            } else {
                // 如果当前元素有children
                if (this.activeElement.children) {
                    this.activeElement.children.push(node); // 添加
                    node.parent = this.activeElement;
                } else {

                    if (!this.activeElement.parent) {
                        this.currPageSate.push(node);
                        node.parent = undefined;
                    } else {
                        this.activeElement.parent.children.push(node);
                        node.parent = this.activeElement.parent;
                    }
                }
            }
        }
    }
})

export default useEditorState