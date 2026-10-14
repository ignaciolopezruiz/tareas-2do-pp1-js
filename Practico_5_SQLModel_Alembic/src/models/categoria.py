from typing import TYPE_CHECKING

from sqlmodel import Field, Relationship, SQLModel

if TYPE_CHECKING:
    from .mueble import Mueble


class Categoria(SQLModel, table=True):
    __tablename__ = "categorias"

    id: int | None = Field(default=None, primary_key=True)
    nombre: str = Field(index=True, unique=True, min_length=3, max_length=40)
    descripcion: str | None = Field(default=None, max_length=200)

    muebles: list["Mueble"] = Relationship(back_populates="categoria")
