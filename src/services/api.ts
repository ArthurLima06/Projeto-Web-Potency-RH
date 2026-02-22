const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api/v1";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestConfig {
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  requiresAuth?: boolean;
  retryOnAuthFail?: boolean;
}

class ApiClient {
  private accessTokenKey = "potency_access_token";
  private refreshTokenKey = "potency_refresh_token";

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  setTokens(tokens: { accessToken: string; refreshToken: string }): void {
    localStorage.setItem(this.accessTokenKey, tokens.accessToken);
    localStorage.setItem(this.refreshTokenKey, tokens.refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  private async refreshAccessToken(): Promise<boolean> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return false;

    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      this.clearTokens();
      return false;
    }

    const payload = await response.json();
    const tokens = payload?.data;
    if (!tokens?.accessToken || !tokens?.refreshToken) {
      this.clearTokens();
      return false;
    }

    this.setTokens(tokens);
    return true;
  }

  async request<T>(path: string, config: RequestConfig = {}): Promise<T> {
    const { method = "GET", body, headers = {}, requiresAuth = false, retryOnAuthFail = true } = config;

    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    };

    if (requiresAuth) {
      const token = this.getAccessToken();
      if (token) {
        requestHeaders.Authorization = `Bearer ${token}`;
      }
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.status === 401 && retryOnAuthFail && requiresAuth) {
      const refreshed = await this.refreshAccessToken();
      if (refreshed) {
        return this.request<T>(path, { ...config, retryOnAuthFail: false });
      }
    }

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = payload?.error?.message ?? "Request failed";
      throw new Error(message);
    }

    return payload?.data as T;
  }
}

export const apiClient = new ApiClient();
