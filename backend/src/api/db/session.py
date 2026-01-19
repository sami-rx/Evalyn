from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from src.api.core.config import settings

# 1. Standardize the URL for Asyncpg
database_url = settings.DATABASE_URL.replace("postgres://", "postgresql+asyncpg://")

# 2. Local pgAdmin usually doesn't use SSL. 
# This logic keeps it flexible just in case.
connect_args = {}
if "sslmode=require" in database_url:
    database_url = database_url.split("?")[0]
    connect_args = {"ssl": "require"}

# 3. Create the Engine
engine = create_async_engine(
    database_url,
    echo=True,           # This will show the SQL in your terminal
    future=True,
    pool_size=10,        # Reduced for local development
    max_overflow=5,
    connect_args=connect_args
)

# 4. Session Factory
AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# 5. Dependency injection function
async def get_async_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()

# Alias for your imports in insta.py
get_db = get_async_db
