import { jobApiProvider } from "../integrations/jobApi";
import { Job } from "../types";

export const jobService = {
  async listJobs(): Promise<Job[]> {
    return jobApiProvider.getJobs();
  },
};
