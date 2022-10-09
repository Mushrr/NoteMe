export interface Sec {
    elementId: string,
    type: string,
    children?: Array<Sec | string>,
    parent: Sec | undefined,
    reflink: HTMLElement,
    [props: string]: any
}

export interface Blog {
    blogid: string,
    title: string,
    blogimg: string,
    content: Array<{
        type: string,
        [propnames: string]: any
    }>,
    contenteditable: Boolean
}

export type NoteMeElement = 'H' | 'SimpleText' | 'ImageGallery' | 'SimpleTextRow'


export type EditorPageElement = Array<Sec>