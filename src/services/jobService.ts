import { apiClient } from "./api";

export interface BackendJob {
  id: string;
  title: string;
  description: string;
  location: string;
  contractType: "clt" | "pj" | "temporary" | "internship";
  postedAt: string;
}

export const jobService = {
  async listJobs(): Promise<BackendJob[]> {
    return apiClient.request<BackendJob[]>("/jobs", {
      method: "GET",
      requiresAuth: false,
    });
  },
};
