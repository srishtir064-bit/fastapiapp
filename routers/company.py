from fastapi import APIRouter
from schemas.company import CompanyCreate,
router=APIRouter(prefix="/comapany",tags=["company"])
companyUpdate,companyResponse
from models import company ,job
from sqlslchemy.orm import session
from ..database import ge_db,SessionLocal
settle
router = APIRouter()
@router.get("/")
def read_company():
    return {"company": "Company root"}

@router.get("/{company_id}")
def read_company(company_id: int):
    return {"company_id": company_id}

@router.get("/{company_id}")
def get_company(company_id: int):
    return company[company_id]