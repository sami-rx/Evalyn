# routes/integrations.py
from fastapi import APIRouter
from src.api.routes.admin.integration.instagram import router as insta_router

router = APIRouter()

# Include the specific instagram router
router.include_router(insta_router, prefix="/instagram", tags=["instagram"])
