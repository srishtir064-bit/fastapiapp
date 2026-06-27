from sqlalchemy import Column, Integer, String,Enum
from sqlalchemy.orm import declarative_base()


class CompanyBase(Base):
    __tablename__ = 'companies'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    email = Column(String,unique=True)
    phone = Column(String,unique=True)
    industry = Column(String, nullable=False)
    size = Column(Enum('Small', 'Medium', 'Large', name='company_size'), nullable=False)
    location = Column(String, nullable=False)

    def __repr__(self):
        return f"<Company(name={self.name}, industry={self.industry}, size={self.size}, location={self.location})>"
