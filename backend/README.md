# FastAPI App

This project is a simple FastAPI application with company and job endpoints.

## Features
- Root endpoint
- Company CRUD endpoints at /companies
- Job endpoints at /jobs
- Pydantic request/response models

## Setup
1. Open the project folder.
2. Activate the virtual environment:
   - Windows: env\Scripts\activate
3. Install dependencies:
   - pip install -r requirements.txt
   - pip install pytest httpx

## Run the app
```bash
uvicorn app.main:app --reload
```

## Test the app
```bash
pytest -q
```

## Example endpoints
- GET /
- GET /companies
- POST /companies
- GET /jobs
- POST /jobs
