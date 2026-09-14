from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# --- Database Connection Setup ---
# Format: mysql+pymysql://username:password@localhost/database_name
DB_URL = "mysql+pymysql://root:Vineet_07!@localhost/campus_lancer"
engine = create_engine(DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# --- Define the Database Table ---
class Gig(Base):
    __tablename__ = "gigs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    budget = Column(String(50))
    location = Column(String(100))

# Automatically create the table in MySQL if it doesn't exist yet
Base.metadata.create_all(bind=engine)

# --- FastAPI Server Setup ---
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# --- API Endpoints ---
@app.get("/api/gigs")
def get_gigs():
    db = SessionLocal()
    # Fetch all records from the 'gigs' table
    gigs = db.query(Gig).all()
    db.close()
    return gigs