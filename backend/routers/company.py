from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from schemas.company import CompanyCreate, CompanyUpdate, CompanyResponse
from models.company import Company
from database import get_db

router = APIRouter(prefix="/companies", tags=["companies"])


@router.get("/", response_model=List[CompanyResponse])
def list_companies(db: Session = Depends(get_db)):
    companies = db.query(Company).all()
    return companies


@router.post("/", response_model=CompanyResponse, status_code=status.HTTP_201_CREATED)
def create_company(payload: CompanyCreate, db: Session = Depends(get_db)):
    db_company = Company(
        name=payload.name,
        email=payload.email,
        phone=payload.phone
    )
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return db_company


@router.get("/{company_id}", response_model=CompanyResponse)
def get_company(company_id: int, db: Session = Depends(get_db)):
    company = db.query(Company).filter(Company.id == company_id).first()
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return company


@router.put("/{company_id}", response_model=CompanyResponse)
def update_company(company_id: int, payload: CompanyUpdate, db: Session = Depends(get_db)):
    db_company = db.query(Company).filter(Company.id == company_id).first()
    if not db_company:
        raise HTTPException(status_code=404, detail="Company not found")

    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        if value is not None:
            setattr(db_company, field, value)
    
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return db_company


@router.delete("/{company_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_company(company_id: int, db: Session = Depends(get_db)):
    db_company = db.query(Company).filter(Company.id == company_id).first()
    if not db_company:
        raise HTTPException(status_code=404, detail="Company not found")
    
    db.delete(db_company)
    db.commit()
    return None