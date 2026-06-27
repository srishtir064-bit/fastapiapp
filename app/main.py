from fastapi import FastAPI
from routers import company 


app=FastAPI()

app.include_router(company.router)

@app.get("/")
def read_root():
    return{"Hello":"World"}

@app.get("/about")
def read_about():
    return{"about":"this is about page"}

@app.get("/contact")
def read_contact():
    return {"contact":"This is contact page"}