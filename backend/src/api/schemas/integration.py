from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class IntegrationBase(BaseModel):
    platform: str
    user_id: int
    
class InstagramCredentials(BaseModel):
    username: str 
    password: str 

class IntegrationResponse(IntegrationBase):
    id: int
    account_username: Optional[str] = None 
    created_at: datetime
    updated_at: Optional[datetime]
    expires_at: Optional[datetime]

    class Config:
        from_attributes = True

class LinkedInAuthURLResponse(BaseModel):
    authorization_url: str

