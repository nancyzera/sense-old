import { persistStore } from "@/functions";
import api from "@/services/axios";
import { loginFields } from "@/types/schema/account";

export const login = async (payload: loginFields) => {
  const { data } = await api.post("/auth/login", payload);
  if (data.success) {
    persistStore("accessToken", data.data.tokens.accessToken);
    persistStore("refreshToken", data.data.tokens.refreshToken);
  }
  return data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout");
  return data;
};

export const getProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data.data.user;
};