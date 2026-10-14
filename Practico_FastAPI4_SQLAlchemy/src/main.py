from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from . import models  # Importa los modelos para que SQLAlchemy detecte las tablas.
from .routers.muebles import muebles_routers

# Crea las tablas que todavía no existan en muebles.db.
Base.metadata.create_all(bind=engine)

app = FastAPI()
app.title = "API Mueblería"

app.include_router(
    muebles_routers,
    tags=["Muebles"],
    prefix="/muebles"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
