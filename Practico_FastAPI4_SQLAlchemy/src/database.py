from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Archivo local donde SQLite va a guardar los muebles.
sqlite_url = "sqlite:///./muebles.db"

# Motor que se comunica con la base de datos.
engine = create_engine(
    sqlite_url,
    connect_args={"check_same_thread": False}
)

# Fabrica de sesiones para trabajar con la base de datos.
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Clase base de la que heredan los modelos de SQLAlchemy.
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
