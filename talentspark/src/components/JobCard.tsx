import type { Job } from "../types/job";

type Props = {
  job: Job;
};

function JobCard({ job }: Props) {
  return (
    <article className="card job-card">
      <div className="job-card__top">
        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <span className="job-card__salary">{job.salary}</span>
      </div>
      <p className="job-card__location">{job.location}</p>
      <p className="job-card__type">{job.type}</p>
    </article>
  );
}

export default JobCard;