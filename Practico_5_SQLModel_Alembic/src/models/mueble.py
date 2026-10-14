from sqlmodel import Field, Relationship, SQLModel

from .categoria import Categoria


class Mueble(SQLModel, table=True):
    __tablename__ = "muebles"

    id: int | None = Field(default=None, primary_key=True)
    nombre: str = Field(index=True, min_length=3, max_length=50)
    precio: float = Field(gt=0)
    stock: int = Field(default=0, ge=0)
    categoria_id: int = Field(foreign_key="categorias.id", index=True)

    categoria: "Categoria" = Relationship(back_populates="muebles")
