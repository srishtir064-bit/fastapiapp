from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    salary = Column(Integer, nullable=False)
    description = Column(String(500), nullable=True)
    company_id = Column(Integer, ForeignKey("companies.id"), nullable=False)
