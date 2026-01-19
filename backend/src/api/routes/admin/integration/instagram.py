from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime

from src.api.db.session import get_db
from src.api.core.dependencies import get_current_user
from src.api.models.user import User
from src.api.models.integration import UserIntegration
from src.api.schemas.integration import IntegrationResponse

router = APIRouter()

@router.get("/save", response_model=IntegrationResponse)
async def save_instagram_account(
    username: str = Query(...),
    password: str = Query(...),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Directly saves Instagram credentials to the database.
    """
    
    # Create the integration instance
    new_integration = UserIntegration(
        user_id=current_user.id,
        platform="instagram",
        account_username=username,
        # Team lead asked for simple storage; 
        # In this context, password is saved in the access_token field
        access_token=password, 
        created_at=datetime.utcnow()
    )

    db.add(new_integration)
    await db.commit()
    await db.refresh(new_integration)

    return new_integration
