export interface Sec {
    type: string,
    children?: Array<Sec>
    [props: string]: any
}


export type NoteMeElement = 'H' | 'SimpleText' | 'ImageGallery' | 'SimpleTextRow'