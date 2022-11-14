import { defineStore } from "pinia";

const useTheme = defineStore('theme', {
    state: () => ({
        theme: localStorage.getItem('blog_theme'),
    }),
    actions: {
        switchTheme() {
            console.log(`当前是${this.theme}模式`);
            if (this.theme === 'dark') {
                this.toLight();
            } else {
                this.toDark();
            }
        },
        toLight() {
            localStorage.setItem('blog_theme', 'light');
            this.$patch(state => {
                state.theme = 'light';
            });
            document.documentElement.classList.remove('dark');
        },
        toDark() {
            localStorage.setItem('blog_theme', 'dark');
            document.documentElement.classList.add('dark');
            this.$patch(state => {
                state.theme = 'dark';
            });
        }
    }
})

export default useTheme;