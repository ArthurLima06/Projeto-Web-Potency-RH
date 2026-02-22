import { Job } from "../types";

export interface JobProvider {
  getJobs(): Promise<Job[]>;
}

class MockJobApiProvider implements JobProvider {
  async getJobs(): Promise<Job[]> {
    // Replace this mock with the official external API integration in the future.
    return [
      {
        id: "job-1",
        title: "Analista de RH",
        description: "Atuar com recrutamento e selecao em ambiente corporativo.",
        location: "Sao Paulo, SP",
        contractType: "clt",
        postedAt: "2026-02-01",
      },
      {
        id: "job-2",
        title: "Desenvolvedor Full Stack",
        description: "Projetar e implementar aplicacoes web com Node.js e React.",
        location: "Remoto",
        contractType: "pj",
        postedAt: "2026-02-10",
      },
    ];
  }
}

export const jobApiProvider: JobProvider = new MockJobApiProvider();
