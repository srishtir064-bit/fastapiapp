from typing import Optional
from pydantic import BaseModel, ConfigDict


class JobCreate(BaseModel):
    title: str
    salary: int
    description: Optional[str] = None
    company_id: int


class JobUpdate(BaseModel):
    title: Optional[str] = None
    salary: Optional[int] = None
    description: Optional[str] = None
    company_id: Optional[int] = None


class JobResponse(BaseModel):
    id: int
    title: str
    salary: int
    description: Optional[str] = None
    company_id: int
    model_config = ConfigDict(from_attributes=True)