import os
from datetime import datetime, timezone
from typing import Optional

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

# --- env & CORS ---
load_dotenv()
origins = [o.strip() for o in os.getenv("FRONTEND_ORIGINS", "http://localhost:5173").split(",")]

app = FastAPI(title="SANYI Backend", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DB setup (SQLite now; MySQL later) ---
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./sanyi.db")
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {})
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()

class LeadIntent(Base):
    __tablename__ = "lead_intents"
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String(64), nullable=True)
    product_title = Column(String(255), nullable=True)
    locale = Column(String(16), nullable=True)
    user_agent = Column(String(255), nullable=True)
    phone = Column(String(32), nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- Schemas ---
class CallIntentIn(BaseModel):
    phone: str = Field(..., description="E.164 format e.g. +77072346666")
    product_id: Optional[str] = None
    product_title: Optional[str] = None
    locale: Optional[str] = None
    user_agent: Optional[str] = None

class CallIntentOut(BaseModel):
    ok: bool
    id: int

# --- Routes ---
@app.get("/api/health")
def health():
    return {"ok": True, "time": datetime.now(timezone.utc).isoformat()}

@app.post("/api/call-intent", response_model=CallIntentOut)
def create_call_intent(payload: CallIntentIn, db: Session = Depends(get_db)):
    # Very light validation: must start with '+'
    if not payload.phone.startswith("+"):
        # normalize later if needed; for now require E.164
        raise ValueError("Phone must be in E.164 format, e.g. +77072346666")
    rec = LeadIntent(
        product_id=payload.product_id,
        product_title=payload.product_title,
        locale=payload.locale,
        user_agent=payload.user_agent,
        phone=payload.phone,
    )
    db.add(rec)
    db.commit()
    db.refresh(rec)
    return {"ok": True, "id": rec.id}
