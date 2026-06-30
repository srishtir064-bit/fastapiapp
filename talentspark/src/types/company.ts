import type { Job } from "./job";

export interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  jobs: Job[];
}

