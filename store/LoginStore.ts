import { create } from "zustand";

interface loginStoreType {
    isRegisterModalOpen: boolean,
    isLoginModalOpen: boolean,
    setLoginModal: (val: boolean) => void,
    setRegisterModal: (val: boolean) => void,
    openRegisterModal: () => void,
    openLoginModal: () => void,
    closeRegisterModal: () => void,
    closeLoginModal: () => void,
}


const useLoginStore = create<loginStoreType>()((set) => ({
    isRegisterModalOpen: false,
    isLoginModalOpen: false,

    setLoginModal: (val: boolean) => set({
        isLoginModalOpen: val
    }),
    setRegisterModal: (val: boolean) => set({
        isRegisterModalOpen: val
    }),

    openRegisterModal: () => set({
        isRegisterModalOpen: true,
    }),
    openLoginModal: () => set({
        isLoginModalOpen: true,
    }),

    closeRegisterModal: () => set({
        isRegisterModalOpen: false,
    }),
    closeLoginModal: () => set({
        isLoginModalOpen: false,
    }),
}))

export default useLoginStore