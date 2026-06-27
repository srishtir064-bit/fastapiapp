from fastapi import AIPRouter

router = APIRouter(prefix="/job",tags=["job"])

@router.get