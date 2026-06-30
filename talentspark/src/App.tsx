import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import { getCompanies } from "./services/companyservice";
import type { Company } from "./types/company";
import type { Job } from "./types/job";

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$170k - $200k",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$150k - $185k",
    type: "Remote",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "Spotify",
    location: "New York, NY",
    salary: "$95k - $120k",
    type: "Hybrid",
  },
];

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCompanies()
      .then((data) => setCompanies(data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load companies"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loading">Loading TalentSpark...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Welcome />

        <section className="section" id="companies">
          <h2>Featured Companies</h2>
          <div className="cards-grid">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        <section className="section" id="jobs">
          <h2>Open Roles</h2>
          <div className="cards-grid">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;