import { defineStore } from "pinia";

const useTheme = defineStore('theme', {
    state: () => ({
        theme: localStorage.getItem('blog_theme'),
    }),
    actions: {
        switchTheme() {
            console.log("切换了!!!!");
            if (this.theme === 'dark') {
                this.toLight();
            } else {
                this.toDark();
            }
        },
        toLight() {
            localStorage.setItem('blog_theme', 'light');
            this.theme = 'light';
            document.documentElement.classList.remove('dark');
        },
        toDark() {
            localStorage.setItem('blog_theme', 'dark');
            document.documentElement.classList.add('dark');
            this.theme = 'dark';
        }
    }
})

export default useTheme;