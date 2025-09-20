export interface User {
  _id: string;
  name: string;
  email: string;
  subscriptionTier: string;
  isPremium: boolean;
  avatar: string | null;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface ApiError {
  response?: {
    data?: {
      success: boolean;
      message: string;
    };
    status?: number;
    statusText?: string;
  };
  message: string;
  code?: string;
}