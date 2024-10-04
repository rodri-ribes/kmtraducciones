import { create } from "zustand";

interface User {
    name: string;
    email: string;
    password: string;
}

interface Props {
    user: User | null;
    signin: (user: User) => void
}

export const useAuth = create<Props>()( (set) => ({
    user: null,
    
    signin: (user: User) => {
        set({user})
    }
}))