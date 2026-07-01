from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "FastAPI app is running"}


def test_company_endpoint():
    response = client.get("/companies")
    assert response.status_code == 200
