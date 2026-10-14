from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select

from ..database import get_session
from ..models import Categoria, Mueble
from ..schemas.muebles import MuebleCreate, MueblePublic, MuebleUpdate

router = APIRouter()
SessionDep = Annotated[Session, Depends(get_session)]


def cargar_mueble(session: Session, mueble_id: int) -> Mueble:
    mueble = session.get(Mueble, mueble_id)
    if mueble is None:
        raise HTTPException(status_code=404, detail="Mueble no encontrado")
    return mueble


@router.post("/", response_model=MueblePublic, status_code=status.HTTP_201_CREATED)
def crear_mueble(datos: MuebleCreate, session: SessionDep):
    if session.get(Categoria, datos.categoria_id) is None:
        raise HTTPException(status_code=404, detail="La categoría indicada no existe")
    mueble = Mueble.model_validate(datos)
    session.add(mueble)
    session.commit()
    session.refresh(mueble)
    return mueble


@router.get("/", response_model=list[MueblePublic])
def listar_muebles(session: SessionDep):
    return session.exec(select(Mueble).order_by(Mueble.id)).all()


@router.get("/{mueble_id}", response_model=MueblePublic)
def obtener_mueble(mueble_id: int, session: SessionDep):
    return cargar_mueble(session, mueble_id)


@router.put("/{mueble_id}", response_model=MueblePublic)
def actualizar_mueble(mueble_id: int, datos: MuebleUpdate, session: SessionDep):
    mueble = cargar_mueble(session, mueble_id)
    if session.get(Categoria, datos.categoria_id) is None:
        raise HTTPException(status_code=404, detail="La categoría indicada no existe")
    mueble.sqlmodel_update(datos.model_dump())
    session.add(mueble)
    session.commit()
    session.refresh(mueble)
    return mueble


@router.delete("/{mueble_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar_mueble(mueble_id: int, session: SessionDep) -> None:
    mueble = cargar_mueble(session, mueble_id)
    session.delete(mueble)
    session.commit()
