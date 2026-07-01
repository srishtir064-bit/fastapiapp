from sqlalchemy import Column, Integer, String
from database import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False,index=True)
    email = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    location = Column(String)