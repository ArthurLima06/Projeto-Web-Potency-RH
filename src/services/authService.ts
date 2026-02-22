import { apiClient } from "./api";

interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthResult {
  user: AuthUser;
  tokens: AuthTokens;
}

export const authService = {
  async register(input: { name: string; email: string; password: string }): Promise<AuthResult> {
    const data = await apiClient.request<AuthResult>("/auth/register", {
      method: "POST",
      body: input,
      requiresAuth: false,
    });

    apiClient.setTokens(data.tokens);
    return data;
  },

  async login(input: { email: string; password: string }): Promise<AuthResult> {
    const data = await apiClient.request<AuthResult>("/auth/login", {
      method: "POST",
      body: input,
      requiresAuth: false,
    });

    apiClient.setTokens(data.tokens);
    return data;
  },

  async me(): Promise<AuthUser> {
    return apiClient.request<AuthUser>("/auth/me", {
      method: "GET",
      requiresAuth: true,
    });
  },

  async logout(): Promise<void> {
    await apiClient.request<{ loggedOut: boolean }>("/auth/logout", {
      method: "POST",
      requiresAuth: true,
    });
    apiClient.clearTokens();
  },
};
