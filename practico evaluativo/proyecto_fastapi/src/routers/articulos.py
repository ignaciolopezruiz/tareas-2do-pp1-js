from typing import Annotated
from fastapi import APIRouter, HTTPException, Path, Query, status

from src.schemas.articulos import ArticuloEdit, ArticuloResponse

router = APIRouter(
    prefix="/articulos",
    tags=["Artículos"],
)

# "Tabla" simulada de base de datos en memoria.
# Cada registro está validado/representado por el modelo ArticuloResponse.
db_articulos: list[ArticuloResponse] = [
    ArticuloResponse(id=1, nombre="Teclado mecánico", precio=15999.99, categoria="Periféricos"),
    ArticuloResponse(id=2, nombre="Mouse inalámbrico", precio=8999.50, categoria="Periféricos"),
    ArticuloResponse(id=3, nombre="Monitor 24''", precio=129999.0, categoria="Pantallas"),
]


def _buscar_articulo(articulo_id: int) -> ArticuloResponse:
    """Función auxiliar que busca un artículo por id o levanta un 404."""
    for articulo in db_articulos:
        if articulo.id == articulo_id:
            return articulo
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"No se encontró un artículo con id {articulo_id}",
    )


# ---------- 1) CREATE ----------
@router.post(
    "/",
    response_model=ArticuloResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Crear un nuevo artículo",
)
def crear_articulo(articulo: ArticuloEdit) -> ArticuloResponse:
    nuevo_id = max((a.id for a in db_articulos), default=0) + 1
    nuevo_articulo = ArticuloResponse(id=nuevo_id, **articulo.model_dump())
    db_articulos.append(nuevo_articulo)
    return nuevo_articulo


# ---------- 2) READ (listado con filtros opcionales) ----------
@router.get(
    "/",
    response_model=list[ArticuloResponse],
    summary="Listar artículos",
)
def listar_articulos(
    categoria: Annotated[
        str | None,
        Query(
            min_length=2,
            max_length=30,
            description="Filtra los artículos por categoría (búsqueda exacta).",
        ),
    ] = None,
    limite: Annotated[
        int,
        Query(
            gt=0,
            le=100,
            description="Cantidad máxima de artículos a devolver.",
        ),
    ] = 10,
) -> list[ArticuloResponse]:
    resultado = db_articulos
    if categoria is not None:
        resultado = [a for a in resultado if a.categoria.lower() == categoria.lower()]
    return resultado[:limite]


# ---------- 3) READ (por id) ----------
@router.get(
    "/{articulo_id}",
    response_model=ArticuloResponse,
    summary="Obtener un artículo por id",
    responses={404: {"description": "Artículo no encontrado"}},
)
def obtener_articulo(
    articulo_id: Annotated[
        int,
        Path(
            gt=0,
            description="Id del artículo que se quiere obtener.",
        ),
    ],
) -> ArticuloResponse:
    return _buscar_articulo(articulo_id)


# ---------- 4) UPDATE ----------
@router.put(
    "/{articulo_id}",
    response_model=ArticuloResponse,
    summary="Actualizar un artículo existente",
    responses={404: {"description": "Artículo no encontrado"}},
)
def actualizar_articulo(
    articulo_id: Annotated[
        int,
        Path(
            gt=0,
            description="Id del artículo que se quiere actualizar.",
        ),
    ],
    datos: ArticuloEdit,
) -> ArticuloResponse:
    articulo_existente = _buscar_articulo(articulo_id)
    articulo_existente.nombre = datos.nombre
    articulo_existente.precio = datos.precio
    articulo_existente.categoria = datos.categoria
    return articulo_existente


# ---------- 5) DELETE ----------
@router.delete(
    "/{articulo_id}",
    response_model=ArticuloResponse,
    summary="Eliminar un artículo",
    responses={404: {"description": "Artículo no encontrado"}},
)
def eliminar_articulo(
    articulo_id: Annotated[
        int,
        Path(
            gt=0,
            description="Id del artículo que se quiere eliminar.",
        ),
    ],
) -> ArticuloResponse:
    articulo = _buscar_articulo(articulo_id)
    db_articulos.remove(articulo)
    return articulo
