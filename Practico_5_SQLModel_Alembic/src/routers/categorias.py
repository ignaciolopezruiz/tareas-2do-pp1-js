from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select

from ..database import get_session
from ..models import Categoria
from ..schemas.categorias import CategoriaCreate, CategoriaPublic

router = APIRouter()
SessionDep = Annotated[Session, Depends(get_session)]


@router.post("/", response_model=CategoriaPublic, status_code=status.HTTP_201_CREATED)
def crear_categoria(datos: CategoriaCreate, session: SessionDep):
    existente = session.exec(select(Categoria).where(Categoria.nombre == datos.nombre)).first()
    if existente:
        raise HTTPException(status_code=409, detail="Ya existe una categoría con ese nombre")
    categoria = Categoria.model_validate(datos)
    session.add(categoria)
    session.commit()
    session.refresh(categoria)
    return categoria


@router.get("/", response_model=list[CategoriaPublic])
def listar_categorias(session: SessionDep):
    return session.exec(select(Categoria).order_by(Categoria.id)).all()


@router.get("/{categoria_id}", response_model=CategoriaPublic)
def obtener_categoria(categoria_id: int, session: SessionDep):
    categoria = session.get(Categoria, categoria_id)
    if categoria is None:
        raise HTTPException(status_code=404, detail="Categoría no encontrada")
    return categoria
