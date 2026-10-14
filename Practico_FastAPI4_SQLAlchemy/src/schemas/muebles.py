from typing import Annotated

from pydantic import BaseModel, ConfigDict, Field


IntPositivo = Annotated[int, Field(gt=0)]

StrNombreMueble = Annotated[
    str,
    Field(
        min_length=3,
        max_length=50,
        description="Nombre del mueble"
    )
]

StrCategoria = Annotated[
    str,
    Field(
        min_length=3,
        max_length=30,
        description="Categoría del mueble"
    )
]

IntPrecio = Annotated[
    int,
    Field(
        gt=1000,
        lt=9999999,
        description="Precio del mueble"
    )
]

IntStock = Annotated[
    int,
    Field(
        ge=0,
        description="Cantidad disponible"
    )
]


class MuebleSchema(BaseModel):
    # Este schema se usa para las respuestas e incluye el ID.
    model_config = ConfigDict(from_attributes=True)

    id: IntPositivo
    nombre: StrNombreMueble
    categoria: StrCategoria
    precio: IntPrecio
    stock: IntStock = 0


class MuebleUpdateSchema(BaseModel):
    # Se usa para crear o editar un mueble; no incluye el ID.
    nombre: StrNombreMueble
    categoria: StrCategoria
    precio: IntPrecio
    stock: IntStock = 0
