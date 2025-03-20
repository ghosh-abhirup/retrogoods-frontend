import axiosInstance from "@/axiosInstance";
import { User } from "@/utility/types";

export const getUser = async (): Promise<User> => {
    const res = await axiosInstance.get("/users/profile", { withCredentials: true });
    return res.data.data;
};
export const logoutUser = () => axiosInstance.post(`users/logout`, {}, { withCredentials: true });