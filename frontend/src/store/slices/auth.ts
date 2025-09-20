import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchStore, persistStore, removeStore } from "@/functions";
import { User, AuthState } from "@/types";
import { login as loginService, logout as logoutService } from "@/services/account";
import { loginFields } from "@/types/schema/account";

const initialState: AuthState = {
  user: null,
  accessToken: fetchStore("accessToken"),
  isAuthenticated: !!fetchStore("accessToken"),
  loading: false,
  error: null,
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload: loginFields, { rejectWithValue }) => {
    try {
      const response = await loginService(payload);
      console.log("loginThunk response:", response);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      const { user, tokens } = response.data;
      persistStore("accessToken", tokens.accessToken);
      persistStore("refreshToken", tokens.refreshToken);
      return { user, accessToken: tokens.accessToken };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  await logoutService();
  removeStore("accessToken");
  removeStore("refreshToken");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;