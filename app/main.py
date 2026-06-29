from fastapi import FastAPI

from routers import company_router, job_router
from database import Base, engine

# Create all tables on startup
Base.metadata.create_all(bind=engine)

app = FastAPI(title="FastAPI Company App")

app.include_router(company_router)
app.include_router(job_router)


@app.get("/")
def read_root():
    return {"message": "FastAPI app is running"}


@app.get("/about")
def read_about():
    return {"about": "this is about page"}


@app.get("/contact")
def read_contact():
    return {"contact": "This is contact page"}