import { Request, Response } from "express";
import { jobService } from "../services/jobService";
import { sendSuccess } from "../utils/apiResponse";

export const jobController = {
  async list(req: Request, res: Response): Promise<Response> {
    const jobs = await jobService.listJobs();
    return sendSuccess(res, jobs);
  },
};
