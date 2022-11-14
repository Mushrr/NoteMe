import { NoteMeParser } from './parser/parser';
import { Plugin } from 'vite'
import { markdownFileRegex } from './parser/regexPattern';

const parser = new NoteMeParser();
export default function NoteMeMdparser(): Plugin {
    // markdown parser
    return {
        name: "noteme-mdparser",
        transform(src, id) {
            if (markdownFileRegex.test(id)) {
                // Markdown File
                // src markdown content
            }
        },
        handleHotUpdate(ctx) {
            // 热更新
        }
    }
} 