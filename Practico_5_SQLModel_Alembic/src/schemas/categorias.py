from sqlmodel import Field, SQLModel


class CategoriaCreate(SQLModel):
    nombre: str = Field(min_length=3, max_length=40)
    descripcion: str | None = Field(default=None, max_length=200)


class CategoriaPublic(SQLModel):
    id: int
    nombre: str
    descripcion: str | None = None
