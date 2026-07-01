import type { Company } from "../types/company";

const API_PATH = import.meta.env.VITE_API_PATH ?? "/api/companies";
const USE_BACKEND = import.meta.env.VITE_USE_BACKEND === "true";

const FALLBACK_COMPANIES: Company[] = [
  {
    id: "1",
    name: "srishti",
    email: "srishtir064@gmail.com",
    phone: "9019146934",
    location: "Mangalore",
    jobs: [
      {
        id: "1",
        title: "Software Engineer",
        company: "srishti",
        location: "Bangalore",
        salary: "5 LPA",
        type: "Full-time",
      },
    ],
  },
  {
    id: "2",
    name: "Microsoft",
    email: "hr@microsoft.com",
    phone: "(425) 882-8080",
    location: "Redmond, WA",
    jobs: [
      {
        id: "3",
        title: "Full Stack Developer",
        company: "Microsoft",
        location: "Redmond, WA",
        salary: "$140k - $170k",
        type: "Full-time",
      },
    ],
  },
  {
    id: "3",
    name: "Spotify",
    email: "careers@spotify.com",
    phone: "(212) 555-0123",
    location: "New York, NY",
    jobs: [
      {
        id: "4",
        title: "Data Analyst",
        company: "Spotify",
        location: "New York, NY",
        salary: "$90k - $115k",
        type: "Hybrid",
      },
    ],
  },
];

export async function getCompanies(): Promise<Company[]> {
  if (!USE_BACKEND) {
    return FALLBACK_COMPANIES;
  }

  try {
    const response = await fetch(API_PATH, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.warn("Company service: backend returned non-OK response", response.status);
      return FALLBACK_COMPANIES;
    }

    return (await response.json()) as Company[];
  } catch (error) {
    console.warn("Company service fallback to static data:", error);
    return FALLBACK_COMPANIES;
  }
}
