from typing import Optional
from pydantic import BaseModel, ConfigDict


class CompanyBase(BaseModel):
    name: str
    email: str
    phone: str
    location:str

class CompanyCreate(CompanyBase):
    pass


class CompanyUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None

class CompanyResponse(CompanyBase):
    id: int
    model_config = ConfigDict(from_attributes=True)
