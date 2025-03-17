import axiosInstance from "@/axiosInstance";
import { UUID } from "node:crypto";

export const getUser = (id: UUID) => axiosInstance.get(`users/${id}`);
export const logoutUser = () => axiosInstance.post(`users/logout`, {}, { withCredentials: true });