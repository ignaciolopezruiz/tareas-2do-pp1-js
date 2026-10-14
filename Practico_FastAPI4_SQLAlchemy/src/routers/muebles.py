from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Path
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.muebles import Mueble
from ..schemas.muebles import MuebleSchema, MuebleUpdateSchema

muebles_routers = APIRouter()


@muebles_routers.get(
    "/",
    response_model=list[MuebleSchema]
)
def get_muebles(db: Session = Depends(get_db)):
    # Trae todos los muebles guardados en SQLite.
    return db.query(Mueble).all()


@muebles_routers.get(
    "/{id}",
    responses={404: {"description": "Mueble no encontrado"}},
    response_model=MuebleSchema
)
def get_mueble_by_id(
    id: Annotated[int, Path(gt=0, description="ID del mueble")],
    db: Session = Depends(get_db)
):
    db_mueble = db.query(Mueble).filter(Mueble.id == id).first()

    if not db_mueble:
        raise HTTPException(
            status_code=404,
            detail="Mueble no encontrado"
        )

    return db_mueble


@muebles_routers.post(
    "/",
    response_model=list[MuebleSchema]
)
def crear_mueble(
    mueble_nuevo: MuebleUpdateSchema,
    db: Session = Depends(get_db)
):
    # Creamos un objeto SQLAlchemy con los datos validados por Pydantic.
    db_mueble = Mueble(
        nombre=mueble_nuevo.nombre,
        categoria=mueble_nuevo.categoria,
        precio=mueble_nuevo.precio,
        stock=mueble_nuevo.stock
    )

    db.add(db_mueble)
    db.commit()
    db.refresh(db_mueble)

    # Devolvemos la lista completa para mantener la respuesta que usa
    # el frontend del TP Evaluativo anterior.
    return db.query(Mueble).all()


@muebles_routers.put(
    "/{id}",
    responses={404: {"description": "Mueble no encontrado"}},
    response_model=MuebleSchema
)
def editar_mueble(
    id: Annotated[
        int,
        Path(gt=0, description="ID del mueble a editar")
    ],
    mueble_editar: MuebleUpdateSchema,
    db: Session = Depends(get_db)
):
    db_mueble = db.query(Mueble).filter(Mueble.id == id).first()

    if not db_mueble:
        raise HTTPException(
            status_code=404,
            detail="Mueble no encontrado"
        )

    db_mueble.nombre = mueble_editar.nombre
    db_mueble.categoria = mueble_editar.categoria
    db_mueble.precio = mueble_editar.precio
    db_mueble.stock = mueble_editar.stock

    db.commit()
    db.refresh(db_mueble)

    return db_mueble


@muebles_routers.delete(
    "/{id}",
    responses={404: {"description": "Mueble no encontrado"}},
    response_model=MuebleSchema
)
def borrar_mueble(
    id: Annotated[
        int,
        Path(gt=0, description="ID del mueble a eliminar")
    ],
    db: Session = Depends(get_db)
):
    db_mueble = db.query(Mueble).filter(Mueble.id == id).first()

    if not db_mueble:
        raise HTTPException(
            status_code=404,
            detail="Mueble no encontrado"
        )

    db.delete(db_mueble)
    db.commit()

    return db_mueble
