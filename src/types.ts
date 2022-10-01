export interface Sec {
    type: string,
    children?: Array<Sec>
    [props: string]: any
}