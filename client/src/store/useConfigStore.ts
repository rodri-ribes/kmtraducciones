import { create } from "zustand";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const detectMode = (): boolean => {
    const body = document.querySelector('body');
    const storedTheme = window.localStorage.getItem("data-theme");
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme)) {
        body?.setAttribute('data-theme', 'dark');
        return true;
    } else {
        body?.setAttribute('data-theme', 'light');
        return false;
    }
}

export const useConfigStore = create<Props>()( (set) => ({
    darkMode: detectMode(),
    
    toggleDarkMode: () => {
        if (document.querySelector('body')?.getAttribute('data-theme') === 'dark') {
            document.querySelector('body')?.setAttribute('data-theme', 'ligth')
            window.localStorage.setItem('data-theme', 'ligth');
            set({darkMode: false})
        } else {
            document.querySelector('body')?.setAttribute('data-theme', 'dark')
            window.localStorage.setItem('data-theme', 'dark');
            set({darkMode: true})

        }
    }
}))