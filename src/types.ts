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
    blogtitlecolor: string,
    content: Array<{
        type: string,
        [propnames: string]: any
    }>,
    scroll?: {
        x?: number,
        y?: number
    }
}

export type NoteMeElement = 'H' | 'SimpleText' | 'ImageGallery' | 'SimpleTextRow'


export type EditorPageElement = Array<Sec>