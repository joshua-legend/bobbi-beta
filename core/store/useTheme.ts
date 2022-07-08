import create from "zustand";

interface ThemeState {
    lightMode:boolean,
    setLight:(prev:boolean)=>void;
}

export const useTheme = create<ThemeState>((set)=>({
    lightMode:true,
    setLight:(prev) => set({lightMode:prev})
}));