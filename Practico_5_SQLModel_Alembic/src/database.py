from pathlib import Path
from typing import Generator

from sqlmodel import Session, create_engine

# La base se guarda en la raíz del proyecto, independientemente de dónde
# se invoque el módulo dentro de la aplicación.
PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATABASE_URL = f"sqlite:///{PROJECT_ROOT / 'muebleria.db'}"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    echo=False,
)


def get_session() -> Generator[Session, None, None]:
    """Proporciona una sesión por petición y la cierra al finalizar."""
    with Session(engine) as session:
        yield session
