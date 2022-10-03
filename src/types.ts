export interface Sec {
    elementId: string,
    type: string,
    children?: Array<Sec | string>,
    parent: Sec | undefined,
    reflink: HTMLElement,
    [props: string]: any
}


export type NoteMeElement = 'H' | 'SimpleText' | 'ImageGallery' | 'SimpleTextRow'


export type EditorPageElement = Array<Sec>