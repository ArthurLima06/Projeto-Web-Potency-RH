export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

export interface PublicUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  contractType: "clt" | "pj" | "temporary" | "internship";
  postedAt: string;
}
