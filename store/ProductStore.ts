import { create } from "zustand";

interface Product {
    id: string,
    name: string,
    sku: string,
    createdAt: string
}

interface ProductStore {
    productList: Product[] | [],
    product: Product | null,

    page: number
}

const useProductStore = create<ProductStore>()((set) => ({
    productList: [],
    product: null,
    page: 1,
}))

export default useProductStore