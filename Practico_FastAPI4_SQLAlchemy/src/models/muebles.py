from sqlalchemy import Column, Integer, String

from ..database import Base


class Mueble(Base):
    __tablename__ = "muebles"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    categoria = Column(String, nullable=False)
    precio = Column(Integer, nullable=False)
    stock = Column(Integer, nullable=False, default=0)
