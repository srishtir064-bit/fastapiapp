import type { Company } from "../types/company";

type Props = {
  company: Company;
};

function CompanyCard({ company }: Props) {
  return (
    <article className="card company-card">
      <div className="company-card__heading">
        <span className="company-card__logo">{company.name.charAt(0)}</span>
        <div>
          <h3>{company.name}</h3>
          <p>{company.location}</p>
        </div>
      </div>
      
      <p className="company-card__info">{company.email}</p>
      <p className="company-card__info">{company.phone}</p>
    </article>
  );
}

export default CompanyCard;