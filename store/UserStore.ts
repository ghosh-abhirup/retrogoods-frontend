import { create } from "zustand";

interface User {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
}

interface UserStore {
    user: User | null,
    setUser: (data: User) => void
}

const useUserStore = create<UserStore>()((set) => ({
    user: null,

    setUser: (data) => set(() => ({ user: data }))
}))

export default useUserStore