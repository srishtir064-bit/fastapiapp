import { useState } from "react";
import type { Company } from "../types/company";

type Props = {
  company?: Company;
  onAddCompany: (c: Company) => void;
};

function Profile({ company, onAddCompany }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", jobTitle: "", jobLocation: "", salary: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleAdd() {
    if (!form.name) return;
    const newCompany: Company = {
      id: String(Date.now()),
      name: form.name,
      email: form.email,
      phone: form.phone,
      location: form.location,
      jobs: [
        {
          id: String(Date.now() + 1),
          title: form.jobTitle || "Software Engineer",
          company: form.name,
          location: form.jobLocation || form.location || "",
          salary: form.salary || "",
          type: "Full-time",
        },
      ],
    };

    onAddCompany(newCompany);
    setForm({ name: "", email: "", phone: "", location: "", jobTitle: "", jobLocation: "", salary: "" });
  }

  const featuredJob = company?.jobs?.[0];

  return (
    <section className="section profile-section">
      <div className="profile profile--centered">
        <div className="profile__header">
          <h1 className="profile__name">{company?.name ?? "srishti"}</h1>
          <p className="profile__meta">Email: {company?.email ?? "srishtir064@gmail.com"}</p>
          <p className="profile__meta">Phone: {company?.phone ?? "9019146934"}</p>
          <p className="profile__meta">Location: {company?.location ?? "Mangalore"}</p>
          <div className="profile__actions">
            <button className="button button--muted">Edit</button>
            <button className="button button--muted">Delete</button>
          </div>
        </div>

        <hr className="profile__divider" />

        <h2 className="profile__section-title">Add Company</h2>
        <div className="profile__form profile__form--inline">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Company name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" />
          <button className="button button--add" onClick={handleAdd}>Add</button>
        </div>

        <div className="profile__featured-job">
          <h2 className="job-title">{form.jobTitle || featuredJob?.title || "Software Engineer"}</h2>
          <p className="job-company">{featuredJob?.company ?? company?.name ?? "srishti"}</p>
          <p className="job-location">{featuredJob?.location ?? "Bangalore"}</p>
          {featuredJob?.salary && <p className="job-salary">{featuredJob.salary}</p>}
        </div>
      </div>
    </section>
  );
}

export default Profile;
