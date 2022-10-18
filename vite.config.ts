import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import notemeMarkdownParser from './src/editor/vite-plugin-noteme-mdparser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    notemeMarkdownParser()
  ],
  base: "/"
})
