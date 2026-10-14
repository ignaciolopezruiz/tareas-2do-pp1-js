# Importar ambos modelos permite que SQLModel registre sus tablas y relaciones.
from .categoria import Categoria
from .mueble import Mueble

__all__ = ["Categoria", "Mueble"]
