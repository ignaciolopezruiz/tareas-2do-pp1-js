from sqlmodel import Field, SQLModel

from .categorias import CategoriaPublic


class MuebleCreate(SQLModel):
    nombre: str = Field(min_length=3, max_length=50)
    precio: float = Field(gt=0)
    stock: int = Field(default=0, ge=0)
    categoria_id: int = Field(gt=0, description="ID de una categoría existente")


class MuebleUpdate(SQLModel):
    nombre: str = Field(min_length=3, max_length=50)
    precio: float = Field(gt=0)
    stock: int = Field(ge=0)
    categoria_id: int = Field(gt=0)


class MueblePublic(SQLModel):
    id: int
    nombre: str
    precio: float
    stock: int
    categoria_id: int
    # Schema anidado: la respuesta incluye la categoría completa del mueble.
    categoria: CategoriaPublic
