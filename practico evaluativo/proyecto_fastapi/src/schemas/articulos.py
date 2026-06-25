from typing import Annotated
from pydantic import BaseModel, Field


class ArticuloEdit(BaseModel):

    nombre: Annotated[
        str,
        Field(
            min_length=2,
            max_length=50,
            description="Nombre del artículo",
            examples=["Teclado mecánico"],
        ),
    ]
    precio: Annotated[
        float,
        Field(
            gt=0,
            description="Precio del artículo en pesos. Debe ser mayor a 0.",
            examples=[15999.99],
        ),
    ]
    categoria: Annotated[
        str,
        Field(
            min_length=2,
            max_length=30,
            description="Categoría a la que pertenece el artículo",
            examples=["Periféricos"],
        ),
    ]


class ArticuloResponse(ArticuloEdit):

    id: Annotated[
        int,
        Field(
            description="Identificador único del artículo",
            examples=[1],
        ),
    ]
