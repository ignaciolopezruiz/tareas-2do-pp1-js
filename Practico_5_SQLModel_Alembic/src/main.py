from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers.categorias import router as categorias_router
from .routers.muebles import router as muebles_router

app = FastAPI(
    title="API Mueblería - SQLModel y Alembic",
    description="API de muebles y categorías con relación de clave foránea y schemas anidados.",
    version="1.0.0",
)

app.include_router(categorias_router, prefix="/categorias", tags=["Categorías"])
app.include_router(muebles_router, prefix="/muebles", tags=["Muebles"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500", "http://localhost:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Inicio"])
def inicio():
    return {"mensaje": "API de Mueblería funcionando", "docs": "/docs"}
