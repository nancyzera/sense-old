// hooks/useAuth.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getProfile, login as loginService, logout as logoutService } from "@/services/account";
import { setCredentials, clearCredentials } from "@/store/slices/auth";
import { persistStore, fetchStore, removeStore } from "@/functions";
import { loginFields } from "@/types/schema/account";
import { User, ApiError } from "@/types";
import { useEffect } from "react";

export const useLogin = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation<unknown, ApiError, loginFields>({
    mutationFn: (payload: loginFields) => loginService(payload),
    onSuccess: (data: any) => {
      console.log("Login response:", data); // Debug the response
      if (data.success) {
        const { user, tokens } = data.data;
        persistStore("accessToken", tokens.accessToken);
        persistStore("refreshToken", tokens.refreshToken);
        dispatch(setCredentials({ user, accessToken: tokens.accessToken }));
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      } else {
        console.error("Login failed:", data.message);
      }
    },
    onError: (error: ApiError) => {
      console.error("Login error:", error);
    },
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      dispatch(clearCredentials());
      removeStore("accessToken");
      removeStore("refreshToken");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};

export const useProfile = () => {
  const dispatch = useDispatch();

  const query = useQuery<User, ApiError>({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled: !!fetchStore("accessToken"),
    refetchInterval: 1000 * 60 * 2,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    console.log("useProfile query state:", { isSuccess: query.isSuccess, data: query.data, error: query.error }); // Debug
    if (query.isSuccess && query.data) {
      const accessToken = fetchStore("accessToken");
      if (accessToken) {
        dispatch(setCredentials({ user: query.data, accessToken }));
      }
    }

    if (query.error) {
      console.error("Profile fetch error:", query.error);
      dispatch(clearCredentials());
      removeStore("accessToken");
      removeStore("refreshToken");
    }
  }, [query.isSuccess, query.data, query.error, dispatch]);

  return query;
};